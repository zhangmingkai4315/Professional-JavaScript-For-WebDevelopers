class Iterator:
    def __init__(self,array):
        self.ArrayList=array
        self.pointer=0
        self.len=len(self.ArrayList)
    def next(self):
        self.pointer=self.pointer+1
        # print self.rightPointer()
        if(self.rightPointer()):
            # self.pointer=self.pointer+1
            return self.ArrayList[self.pointer]
        else:
            self.pointer=self.len-1
            return False
    def before(self):
        self.pointer=self.pointer-1

        if(self.rightPointer()):
            return self.ArrayList[self.pointer]
        else:
            self.pointer=0
            return False
    def current(self):
        # self.pointer=self.pointer-1
        if(self.rightPointer()):
            return self.ArrayList[self.pointer]
        else:
            # self.pointer=0
            return False
    def rightPointer(self):
        # print (self.pointer,self.len)
        if(self.pointer<self.len and self.pointer>=0):
            return True
        else:
            return False


iter1=Iterator([1,2,3,4,5])
print iter1.next()
print iter1.next()
print iter1.next()
print iter1.next()
print iter1.next()
print iter1.next()
print iter1.current()


print iter1.before()
print iter1.before()
print iter1.before()
print iter1.before()
print iter1.before()
print iter1.before()
print iter1.current()
