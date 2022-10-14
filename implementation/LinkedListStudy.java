class LinkedListStudy{

    class Node{
        int data;
        Node next;
       
    }
    Node head=null;
    
    public void insertNode(int data){
    
        Node newnode=new Node();
        if(head==null){
            newnode.data=data;
            head=newnode;
        }else{
            Node temp;
            temp=head;
            while(temp.next!=null){
                temp=temp.next;
            }
            temp.next=newnode;
            temp.next.data=data;
        }
    }
    
    
    public void display(){
        if(head==null){
            System.out.println("linked list empty");
        }else{
            Node temp=head;
            while(temp!=null){
                System.out.print(temp.data+"=>");
                temp=temp.next;
            }
        }
    }
    
        public static void main(String[] args) {
            LinkedListStudy ob=new LinkedListStudy();
           
            ob.insertNode(5);
            ob.insertNode(10);
    
            ob.insertNode(25);
            ob.insertNode(85);
            ob.display();
    
        }
    }