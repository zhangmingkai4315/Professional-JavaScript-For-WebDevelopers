#coding utf-8

# from abc import ABCMeta,abstractmethod
class Player(object):
    # __metaclass__ = ABCMeta
    """docstring for Player"""
    def __init__(self, name):
        super(Player, self).__init__()
        self.name = name
    # @abstractmethod
    def attack(self):pass
    def move(self):pass

class FrontPlayer(Player):
    def __init__(self, name):
        super(FrontPlayer, self).__init__(name)
    def attack(self):
        print "FrontPlayer attacking"
    def move(self):
        print "FrontPlayer Moving"

class BackPlayer(Player):
    def __init__(self, name):
        super(BackPlayer, self).__init__(name)
    def attack(self):
        print "BackPlayer attacking"
    def move(self):
        print "BackPlayer Moving"

class AnimalPlayer(Player):
    def __init__(self, name):
        super(AnimalPlayer, self).__init__(name)
    # def attack(self):
    #     pass
    def attackAnimal(self):
        print "AnimalPlayer attack"
    def move(self):
        pass

def AnimalPlayerAdaptor(animalPlayerObj):
    # animalPlayerObj.
    class Adaptor(Player):
        def __init__(self, animalPlayerObj):
            self.animalPlayerObj=animalPlayerObj
        def attack(self):
            self.animalPlayerObj.attackAnimal()
        def move(self):
            self.animalPlayerObj.move()
    adaptor=Adaptor(animalPlayerObj)
    return adaptor


player1=FrontPlayer("Yao")
player2=BackPlayer("Bei")
player3=AnimalPlayer("Dog")

team=[player1,player2,AnimalPlayerAdaptor(player3)]
for i in team:
    i.attack()
