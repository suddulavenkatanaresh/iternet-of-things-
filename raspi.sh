
# this file firstly update the raspi and then install the mqtt client and broker and finally shows the broker ip 


 sudo apt update


 sudo apt install -y mosquitto mosquitto-clients


 sudo systemctl enable mosquitto.service


 mosquitto -v


  hostname -I

