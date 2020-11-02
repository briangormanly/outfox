import faker from 'faker';

export const friendsData = [
	{
		id        : 1,
		firstName : faker.name.firstName(),
		lastName  : faker.name.lastName(),
		activity  : 'Created Group CompSci',
		time      : 'Now',
		image     : faker.image.avatar()
	},
	{
		id        : 2,
		firstName : faker.name.firstName(),
		lastName  : faker.name.lastName(),
		activity  : 'Added to Math',
		time      : 'Now',
		image     : faker.image.avatar()
	},
	{
		id        : 3,
		firstName : faker.name.firstName(),
		lastName  : faker.name.lastName(),
		activity  : 'Create Group CMPT-424',
		time      : '2 Hours ago',
		image     : faker.image.avatar()
	},
	{
		id        : 4,
		firstName : faker.name.firstName(),
		lastName  : faker.name.lastName(),
		activity  : 'Edited Group English',
		time      : '4 Hours ago',
		image     : faker.image.avatar()
	},
	{
		id        : 5,
		firstName : faker.name.firstName(),
		lastName  : faker.name.lastName(),
		activity  : 'Created Group CMPT-475',
		time      : '5 Hours ago',
		image     : faker.image.avatar()
	},
	{
		id        : 6,
		firstName : faker.name.firstName(),
		lastName  : faker.name.lastName(),
		activity  : 'Added New Resource',
		time      : '8 Hours ago',
		image     : faker.image.avatar()
	},
	{
		id        : 7,
		firstName : faker.name.firstName(),
		lastName  : faker.name.lastName(),
		activity  : 'Deleted Group Art',
		time      : '9 Hours ago',
		image     : faker.image.avatar()
	},
	{
		id        : 8,
		firstName : faker.name.firstName(),
		lastName  : faker.name.lastName(),
		activity  : 'Added to Data Structures',
		time      : 'Yesterday',
		image     : faker.image.avatar()
	},
	{
		id        : 9,
		firstName : faker.name.firstName(),
		lastName  : faker.name.lastName(),
		activity  : 'Followed Group Data Science',
		time      : 'Yesterday',
		image     : faker.image.avatar()
	}
];
