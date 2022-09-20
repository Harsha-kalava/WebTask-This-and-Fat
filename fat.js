class Student {
	static count = 0;

	constructor(name, age, mobNo, marks) {
		this.name = name;
		this.age = age;
		this.mobNo = mobNo;
		this.marks = marks;
		Student.count++;
	}

	studentsCreated() {
		return Student.count;
	}

	eligibleForPlacements(minimumBoardMarks) {
		return (comapnyAge) => {
			if (this.marks >= minimumBoardMarks && this.age >= comapnyAge) {
				console.log(`${this.name} is eligible for placements`);
			} else {
				console.log(`${this.name} is not eligible for placements`);
			}
		};
	}
}

const dosa = new Student("dosa", 28, 1234, 45);
const idli = new Student("idli", 18, 1235, 35);
const vada = new Student("vada", 22, 1236, 36);

console.log(idli.studentsCreated());

dosa.eligibleForPlacements(30)(18);
