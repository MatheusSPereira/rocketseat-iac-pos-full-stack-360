import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("primeiro-bucket", {
    bucket: "primeiro-bucket",
    tags: {
        IAC: "true",
    }
});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
    name: "primeiro-ecr",
    imageTagMutability: "IMMUTABLE",
    tags: {
        IAC: "true"
    }
})

// Export the vars of the bucket
export const bucketName = bucket.id;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

// Export the vars of the repository
export const ecrName = ecr.name;
export const ectRepositoryUrl = ecr.repositoryUrl;