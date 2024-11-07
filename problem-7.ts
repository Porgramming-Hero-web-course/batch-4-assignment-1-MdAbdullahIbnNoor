// Problem 7:
//Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

{
    class Car {
        make: string;
        model: string;
        year: number;

        public constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        public getCarAge(): void {
            let thisYear = new Date().getFullYear()
            let carAge = thisYear - this.year;
            console.log(carAge); 
        }
    }

    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge()

}