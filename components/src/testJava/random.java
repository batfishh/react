import java.util.Scanner;
import java.util.Arrays;
public class Random
{
    // instance variables - replace the example below with your own
   public static void main(){
       
       Scanner sc = new Scanner(System.in);
       System.out.println("Enter:");
       int n = sc.nextInt();
       int x[]=new int[n];
       
       for(int i=0;i<n;i++){
           x[i]=sc.nextInt();
        }
        System.out.println(Arrays.toString(x));
        
        int max = x[0];
        
        for(int j=1;j<n;j++){
            if(x[j]>max){
                max=x[j];
            }
        }
        
        System.out.println("Largest element is :"+max);
        
     
       
       
      
   
       
    
    
}
}
