
import json

from gpiozero import CPUTemperature
cpu = CPUTemperature()



import paho.mqtt.client as mqtt #import the client1
broker_address="192.168.43.129" 
#broker_address="iot.eclipse.org"
print("creating new instance")
client = mqtt.Client("P1") #create new instance
print("connecting to broker")
client.connect(broker_address) #connect to broker


from time import sleep
import json




while True :


    venkat=cpu.temperature
    
    print(venkat)
    #data['msg']=venka
    
    data=[]
    data.insert(0,venkat)
    data_out=json.dumps(data)
    client.publish("raspitemp",venkat)
    #print(data)

    sleep(1)



