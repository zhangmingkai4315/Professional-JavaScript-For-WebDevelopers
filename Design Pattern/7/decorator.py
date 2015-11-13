#!/usr/bin/env python
#coding=utf-8


# 1. 函数可以被赋值给另一个变量，
def shout():
    word="yes"
    print word.capitalize()+"!"

AnotherShout=shout
del shout
# shout()
AnotherShout()
# ----------------------
# 2. 函数可以在另一个函数中定义

def talk():
    def whispe():
        print "woo"
    whispe()

talk()

# 3, 函数可以被定义为参数传递

def func1(fn):
    fn()
    print "fn has been execed"
func1(talk)
# ----------------------# ----------------------# ----------------------# ----------------------

def a_stand_alone_function():
    print "I am a stand alone function, don't you dare modify me"
a_stand_alone_function()

def my_shiny_new_decorator(a_function_to_decorate):
    def the_wrapper_around_the_original_function():

        # Put here the code you want to be executed BEFORE the original
        # function is called
        print "Before the function runs"

        # Call the function here (using parentheses)
        a_function_to_decorate()

        # Put here the code you want to be executed AFTER the original
        # function is called
        print "After the function runs"
    return the_wrapper_around_the_original_function

func2=my_shiny_new_decorator(a_stand_alone_function)
func2()
# ----------------------# ----------------------# ----------------------# ----------------------

# 使用标准语法
@my_shiny_new_decorator
def anotherfunc():
    print "Another func"

anotherfunc()

# ----------------------# ----------------------# ----------------------# ----------------------

#传递参数


def a_decorator_passing_arguments(function_to_decorate):
    def a_wrapper_accepting_arguments(arg1, arg2):
        print "I got args! Look:", arg1, arg2
        function_to_decorate(arg1, arg2)
    return a_wrapper_accepting_arguments

# Since when you are calling the function returned by the decorator, you are
# calling the wrapper, passing arguments to the wrapper will let it pass them to
# the decorated function

@a_decorator_passing_arguments
def print_full_name(first_name, last_name):
    print "My name is"+str(first_name)+str(last_name)

print_full_name("Peter", "Venkman")
# outputs:
#I got args! Look: Peter Venkman
#My name is Peter Venkman

# ----------------------# ----------------------# ----------------------# ----------------------

#装饰方法

def method_friendly_decorator(method_to_decorate):
    def wrapper(self, lie):
        lie = lie - 3 # very friendly, decrease age even more :-)
        return method_to_decorate(self, lie)
    return wrapper


class Lucy(object):

    def __init__(self):
        self.age = 32

    @method_friendly_decorator
    def sayYourAge(self, lie):
        print "I am %s, what did you think?" % (self.age + lie)

l = Lucy()
l.sayYourAge(-3)
#outputs: I am 26, what did you think?
# ----------------------# ----------------------# ----------------------# ----------------------

#系统自带的三个装饰器函数

# @property
# @staticmethod
# @classmethod
#

class Kls(object):

    no_inst = 0
    def __init__(self):
        Kls.no_inst = Kls.no_inst + 1
    @classmethod
    def get_no_of_instance(cls_obj):
        return cls_obj.no_inst
ik1 = Kls()
ik2 = Kls()
# 该方法访问的是类，而不是实例对象 传递是class而不是self
print ik1.get_no_of_instance()
print Kls.get_no_of_instance()
