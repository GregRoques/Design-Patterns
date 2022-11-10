package factory.phone;

public class OperatingFactory {
    public OS getInstance(String str){
        if(str.equalsIgnoreCase("Open"){
            return new Android();
        }
        if(str.equalsIgnoreCase("Closed")){
            return new IOS();
        }
        return new Windows();
}}
