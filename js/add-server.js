// Load the AWS SDK for Node.js
function addServer(callback){
    var AWS = require('aws-sdk');
    const fs = require('fs');
    // Load credentials and set region from JSON file
    AWS.config.update({region: 'us-east-1'});
    
    const userData = fs.readFileSync("./bootstrap-script.sh", "utf-8");
    let buff = new Buffer(userData);
    let base64UserData = buff.toString('base64');
    
    // Create EC2 service object
    var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});
    
    // AMI is amzn-ami-2011.09.1.x86_64-ebs
    var instanceParams = {
       ImageId: 'ami-0915e09cc7ceee3ab', 
       InstanceType: 't2.medium',
       KeyName: 'quarantine-key-pair',
       MinCount: 1,
       MaxCount: 1,
       SecurityGroupIds: ['sg-0e9fa95aa92415afd'],
       UserData: base64UserData
    };
    
    // Create a promise on an EC2 service object
    var instancePromise = new AWS.EC2({apiVersion: '2016-11-15'}).runInstances(instanceParams).promise();
    
    // Handle promise's fulfilled/rejected states
    instancePromise.then(
      function(data) {
        console.log(data);
        const [ instance ] = data.Instances;
        var instanceId = data.Instances[0].InstanceId;
        console.log("Created instance", instanceId);
        // Add tags to the instance
        tagParams = {Resources: [instanceId], Tags: [
           {
              Key: 'Name',
              Value: 'Minecraft Server'
           }
        ]};
        // Create a promise on an EC2 service object
        var tagPromise = new AWS.EC2({apiVersion: '2016-11-15'}).createTags(tagParams).promise();
        // Handle promise's fulfilled/rejected states
        tagPromise.then(
          function(data) {
            console.log("Instance tagged");
            callback({
                instance,
            });
          }).catch(
            function(err) {
            console.error(err, err.stack);
          });
      }).catch(
        function(err) {
        console.error(err, err.stack);
      });
}

  module.exports = addServer;