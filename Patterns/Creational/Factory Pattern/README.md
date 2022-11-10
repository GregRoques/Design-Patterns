# Factory Design Pattern

- we create object without exposing the creation logic to the client and refer to newly created object using a common interface.

## Step 1: Create an interface

```
public interface Shape {
   void draw();
}

```

## Step 2: Create concrete classes implementing the same interface

```
public class Rectangle implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Rectangle::draw() method.");
   }
}

public class Circle implements Shape {

   @Override
   public void draw() {
      System.out.println("Inside Circle::draw() method.");
   }
}

```

## Step 3: Create a "Factory" to generate object of concrete class based on given information.

```
public class ShapeFactory {

   public Shape getShape(String shapeType){
      if(shapeType == null){
         return null;
      }
      if(shapeType.equalsIgnoreCase("CIRCLE")){
         return new Circle();
      }
      if(shapeType.equalsIgnoreCase("RECTANGLE")){
         return new Rectangle();
      }

      return null;
   }
}
```

## Step 4: Use the Factory to get object of concrete class by passing an information (type in this case).

```
public class FactoryPatternDemo {

   public static void main(String[] args) {
      ShapeFactory shapeFactory = new ShapeFactory();

      //get an object of Circle and call its draw method.
      Shape shape1 = shapeFactory.getShape("CIRCLE");
      shape1.draw();

      //get an object of Rectangle and call its draw method.
      Shape shape2 = shapeFactory.getShape("RECTANGLE");
      shape2.draw();

   }
}

```
