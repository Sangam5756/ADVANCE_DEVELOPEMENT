# What I Learn

- Deploy a  application on EC2 instances.
- Use Auto Scaling Groups (ASG) to automatically scale the application based on demand.
- Configure load balancing with an Application Load Balancer (ALB) and secure traffic with HTTPS.
- Simulate scaling up and scaling down of resources based on traffic and load.
- Programmatically manage Auto Scaling settings through the AWS SDK.
- Clean up AWS resources to avoid unnecessary costs.



# Step-by-Step Guide to Deploying a Node.js App with AWS Auto Scaling

This guide walks you through setting up an Auto Scaling Group (ASG) with EC2 instances running a Node.js application. You will learn how to launch instances, configure Auto Scaling, set up load balancing, and scale resources dynamically.

---

## Step 1: Create an EC2 Instance

1. **Launch an EC2 instance**:

   - Choose an instance type (e.g., `t2.micro` for testing).
   - Select Ubuntu 20.04 as the operating system.
   - Create a new **Security Group** that allows:
     - SSH (Port 22)
     - HTTP (Port 80)
     - HTTPS (Port 443)
   - Launch the instance.

2. **Install Node.js on the EC2 instance**:
   Follow the [DigitalOcean tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04) to install Node.js on your EC2 instance.

---

## Step 2: Clone the Repo

1. **Clone the repository**:
   Run the following command to clone the Node.js app repository to your instance:

   ```bash
   git clone https://github.com/100xdevs-cohort-2/week-22
   ```

````

## Step 3: Create an AMI (Amazon Machine Image)

Once your EC2 instance is configured (with Node.js and the app cloned),

1. create an AMI (Amazon Machine Image) for future use.
2. Go to the EC2 Dashboard and select the instance.
3. Click Actions → Create Image to create a reusable AMI.

## Step 4: Create a Launch Template

1. Create a Launch Template using the AMI you created:
2. Set the AMI, instance type, and security group.
3. Add user data to automate the instance setup (covered in Step 5).

## Step 5: Add User Data Script

Add the following user-data script to the Launch Template:

```bash
    #!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v22.0.0/bin/
echo "hi there before"
echo "hi there after"
npm install -g pm2
cd /home/ubuntu/week-22
pm2 start index.js
pm2 save
pm2 startup

````

## Step 6: Create an Auto Scaling Group (ASG)

1. Create an Auto Scaling Group (ASG):

- Go to the EC2 Dashboard → Auto Scaling Groups.
- Create a new Auto Scaling Group and attach it to the Launch Template you created earlier.
- Set minimum, maximum, and desired instance counts.
- Enable Multiple Availability Zones for better fault tolerance.
- Set Scaling Policies:

2. Configure dynamic scaling policies to automatically scale in or scale out based on metrics like CPU utilization or memory usage.

## Step 7: Set Up Load Balancer

1. Create an Application Load Balancer (ALB):
   - Add an HTTPS listener to the ALB (on port 443).
   - Request a certificate from AWS Certificate Manager (ACM) for your domain.
2. Create a Target Group:
   - Attach the target group to the ASG to direct traffic to the running EC2 instances.

## Step 8: Simulate Scaling (Scale Up and Scale Down)

1.  Simulate Scale-Up
    - Run an infinite loop on one of the instances to trigger the scaling policy.
    ```bash
    let c = 0;
    while (1) {
    c++;
    }
    ```
2.  Simulate Scale-Down:
    - Stop the infinite loop, and the Auto Scaling group will scale down by terminating excess instances.

## Step 9: Scaling with Node.js App

- Programmatically Update Desired Capacity: You can use the AWS SDK for JavaScript to update the desired capacity of the Auto Scaling group.

- Install the AWS SDK:

```bash npm install aws-sdk

```

- Use the following code in your Node.js application to change the desired capacity:

```bash
import AWS from 'aws-sdk';

AWS.config.update({
  region: 'ap-south-1',
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_ACCESS_SECRET'
});

const autoscaling = new AWS.AutoScaling();

const updateDesiredCapacity = (autoScalingGroupName, desiredCapacity) => {
  const params = {
    AutoScalingGroupName: autoScalingGroupName,
    DesiredCapacity: desiredCapacity
  };

  autoscaling.setDesiredCapacity(params, (err, data) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
};

const groupName = 'node-app-1';
const newDesiredCapacity = 3;
updateDesiredCapacity(groupName, newDesiredCapacity);

```
## Step 10: Cleanup
1. Delete Resources After Testing:
To avoid additional costs, delete the following resources:
- Auto Scaling Group (ASG)
- Target Group
- Load Balancer
- Launch Template
- AMI
- EC2 Instance (used to create the image)
