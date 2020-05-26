This is multi-sig wallet


Had to Increase System limit for number of file watchers reached.

when i first ran npm start to get the basic react app working I received the error:
![the number of files monitored by the system has reached its limit](images-for-md-file/ReactJS-error-ENOSPC-System-limit-for-number-of-file-watchers-reached-on-ubuntu-min.png)

Error was fixed by changing:

```
sudo vim /etc/sysctl.conf
fs.inotify.max_user_watches=524288
sudo sysctl -p
```

