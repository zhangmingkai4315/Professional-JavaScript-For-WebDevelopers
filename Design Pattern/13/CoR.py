#encoding=utf-8
def printInfo(info):
    print unicode(info, 'utf-8').encode('gbk')
class Order():
    successor = None
    name = ''
    def SetSuccessor(self, successor):
        self.successor = successor
    def HandleRequest(self, request):
        pass
class Order100(Order):
    def HandleRequest(self, request):
        if request.RequestType == '1' and request.Number <= 100:
            print "100 bonus+"
        else:
            if self.successor != None:
                self.successor.HandleRequest(request)

class Order200(Order):
    def HandleRequest(self, request):
        print
        if request.RequestType == '2' and request.Number <= 200:
            print "200 bonus+"
        else:
            if self.successor != None:
                self.successor.HandleRequest(request)
class Order500(Order):
    def HandleRequest(self, request):
        if request.RequestType == '5' and request.Number >= 200:
            print "500 bonus+"
        else:
            if self.successor != None:
                self.successor.HandleRequest(request)
class Request():
    RequestType = ''
    RequestContent = ''
    Number = 0
def clientUI():
    order5=Order500()
    order2=Order200()
    order1=Order100()
    order1.SetSuccessor(order2)
    order2.SetSuccessor(order5)
    request=Request()
    request.RequestType='2'
    request.Number=200

    order1.HandleRequest(request)
    request.RequestType='5'
    request.Number=1000
    order1.HandleRequest(request)

if __name__ == '__main__':
    clientUI();
