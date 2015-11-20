public abstract class Beverage{
  final void init(){
    boilWater();
    brew();
    pourIncup();
    addCondiments();
  }
  void boilWater(){
    System.out.println("Boil water");
  }
  abstract void brew();
  abstract void addCondiments();
  abstract void pourIncup();
}

public class Coffee extends Beverage{
//重载函数
  void brew(){
    System.out.println("brewing Coffee");
  }
//重载函数
  void pourIncup(){
    System.out.println("pouring Coffee");
  }
//重载函数
  void addCondiments(){
    System.out.println("Add suger and milk");
  }
}

public class Tea extends Beverage{
//重载函数
  void brew(){
    System.out.println("brewing tea");
  }
//重载函数
  void pourIncup(){
    System.out.println("pouring tea");
  }
//重载函数
  void addCondiments(){
    System.out.println("Add lemon");
  }
}


public lass Test{
  public static void main(){
    Beverage coffee=new Coffee();
    coffee.init();
    Beverage tea=new Tea();
    tea.init();
  }
}
