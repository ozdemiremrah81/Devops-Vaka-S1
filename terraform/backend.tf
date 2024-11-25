terraform {
  backend "s3" {
    bucket         = "terraformstates-1"
    key            = "state2/terraform.tfstate"
    region         = "eu-north-1"
    encrypt        = true
    dynamodb_table = "tf_lock"
  }
}