package example.composite;

public class CompositeTest {
    public static void main(String[] args) {

        // create leafs
        Component hardDrive = new Leaf("Hard Drive", 4000);
        Component mouse = new Leaf("Mouse", 400);
        Component cpu = new Leaf("CPU", 800);
        Component ram = new Leaf("RAM", 1000);
        Component monitor = new Leaf("4K Monintor", 2500);

        // create composites
        Composite peripheral = new Composite("Peripheral");
        Composite cabinet = new Composite("Cabinet");
        Composite motherBoard = new Composite("Mother Board");
        Composite computer = new Composite("Computer");

        // add leafs to Composites
        peripheral.addComponent(mouse);
        peripheral.addComponent(monitor);

        cabinet.addComponent(hardDrive);
        motherBoard.addComponent(cpu);
        motherBoard.addComponent(ram);
        cabinet.addComponent(motherBoard);

        computer.addComponent(peripheral);
        computer.addComponent(cabinet);

    }
}
