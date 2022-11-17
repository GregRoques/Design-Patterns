package example.java;

public class Shop {
    public static void main(String a[]) {
        Phone p = new PhoneBuilder.setOS("Android").setRam(2).getPhone();
        System.out.println(p);
    }
}
