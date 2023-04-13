#%%

# list S3 Buckets

import boto3

s3 = boto3.client('s3')

#%%

response = s3.list_buckets()


#%%

buckets = response["Buckets"]

#%%
for bucket in buckets:
    print(bucket["image"])


bucket = response['Buckets']

{
    'Buckets': [
        {
            'Name': 'string',
            'CreationDate': datetime(2015, 1, 1),
            'imaheUri':"hhgbnvngfhgj"
        },
        {
            'Name': 'string',
            'CreationDate': datetime(2015, 1, 1)
        },
        {
            'Name': 'string',
            'CreationDate': datetime(2015, 1, 1)
        },
        {
            'Name': 'string',
            'CreationDate': datetime(2015, 1, 1)
        },
    ],
    'Owner': {
        'DisplayName': 'string',
        'ID': 'string'
    }
}