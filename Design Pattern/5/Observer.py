class Observer:
    def update(self,temp,humidity,pressure):
        return
    def display(self):
        return

class Subject:
    def registerObserver(self,observer):
        return;
    def removeObserver(self,observer):
        return;
    def notifyObservers(self,observer):
        return;


class WeatherData(Subject):
    def __init__(self):
        self.observers=[]
        self.temperature=0.0
        self.humidity=0.0
        self.pressure=0.0
        return
    def registerObserver(self,observer):
        self.observers.append(observer)
        return;
    def removeObserver(self,observer):
        self.observers.remove(observer)
        return;
    def notifyObservers(self):
        for item in self.observers:
            item.update(self.temperature,self.humidity,self.pressure)
        return;

    def getTemperature(self):
        return self.temperature
    def getHumidity(self):
        return self.humidity
    def getPressure(self):
        return self.pressure
    def measurementsChanged(self):
        self.notifyObservers()
        return
    def setMesurement(self, temp, humidity, pressure):
        self.temperature = temp
        self.humidity = humidity
        self.pressure = pressure
        self.measurementsChanged()
        return


class CurrentConditionDisplay(Observer):
    def __init__(self, weatherData):
        self.weatherData = weatherData
        self.temperature = 0.0
        self.humidity = 0.0
        self.pressure = 0.0
        weatherData.registerObserver(self)
        return
    def update(self, temp, humidity, pressure):
        self.temperature = temp
        self.humidity = humidity
        self.pressure = pressure
        self.display()
        return
    def display(self):
        print 'temprature = %f, humidity = %f.' % \
                (self.temperature, self.humidity)
        return

class StatiticDisplay(Observer):
    def __init__(self, weatherData):
        self.weatherData = weatherData
        self.temperature = 0.0
        self.humidity = 0.0
        self.pressure = 0.0
        weatherData.registerObserver(self)
        return
    def update(self, temp, humidity, pressure):
        self.temperature = temp
        self.humidity = humidity
        self.pressure = pressure
        self.display()
        return
    def display(self):
        print 'Statictic: t = %f, h = %f, pressure = %f.' % \
                (self.temperature, self.humidity, self.pressure)
        return


weather = WeatherData()
display = CurrentConditionDisplay(weather)
weather.setMesurement(2.0, 3.0, 4.0)
display = StatiticDisplay(weather)
weather.setMesurement(3.0, 4.0, 5.0)
