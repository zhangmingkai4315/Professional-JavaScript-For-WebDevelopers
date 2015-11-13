class Singleton(object):
    def __new__(cls,*args,**kw):
        if not hasattr(cls,'_instance'):
            orig=super(Singleton,cls)
            cls._instance=orig.__new__(cls,*args,**kw)
        return cls._instance

class MyClass(Singleton):
    a=1

one=MyClass()
two=MyClass()

two.a=3
print one.a


# ----------------------------------------------------

def singletonDecorator(cls,*args,**kw):
    instances={}
    def _singleton():
        if cls not in instances:
            instances[cls]=cls(*args,**kw)
        return instances[cls]
    return _singleton


@singletonDecorator
class MyClass2(object):
    a=1

one=MyClass2()
two=MyClass2()

two.a=4
print one.a
print one == two
