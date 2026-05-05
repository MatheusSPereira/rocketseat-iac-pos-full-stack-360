import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const firstBucket = new aws.s3.Bucket("primeiro-bucket", {
    bucket: "primeiro-bucket-ftr",
    tags: {
        IAC: "true",
    }
});

const secondBucket = new aws.s3.Bucket("segundo-bucket", {
    bucket: "segundo-bucket-ftr",
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
export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketRegion = secondBucket.region;
export const secondBucketArn = secondBucket.arn;

// Export the vars of the repository
export const ecrName = ecr.name;
export const ectRepositoryUrl = ecr.repositoryUrl;