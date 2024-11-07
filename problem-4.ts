// Problem 4:
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

{
    const pi: number = 3.1416

    type Circle = {
        shape: 'circle'
        radius: number
    }

    type Rectangle = {
        shape: 'rectangle'
        width: number
        height: number
    }

    type GeometricShape = Circle | Rectangle

    const calculateShapeArea = (shape: GeometricShape): number => {
        let area = 0
        if (shape.shape === 'circle') {
            area = pi * (shape.radius ** 2) 
        }
        else {
            area = shape.height * shape.width
        }

        return area
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5.25 });
    console.log(circleArea.toFixed(2));

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6.32,
    });

    console.log(rectangleArea.toFixed(2));
}