resource "aws_subnet" "app1_publicsubnet1" {
  vpc_id            = aws_vpc.app1_vpc.id
  cidr_block        = var.public_subnet1_cidr
  availability_zone = var.AZ1a
  }

resource "aws_subnet" "app1_publicsubnet2" {
  vpc_id            = aws_vpc.app1_vpc.id
  cidr_block        = var.public_subnet2_cidr
  availability_zone = var.AZ1b
  }
