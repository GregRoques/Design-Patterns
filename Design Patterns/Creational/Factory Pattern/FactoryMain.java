import factory.phone.OperatingFactory;

public class FactoryMain {

    public static void main(String args[]) {
        OperatingFactory osf = new OperatingFactory();
        OS obj = osf.getInstance("adsfadsf");
        obj.spec(); // returns Widows, aka "I am the worst!"
    }
}
