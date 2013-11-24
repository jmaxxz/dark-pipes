m=$(date | base64)
curl -sX POST -H "Content-Type: application/json" -d "{\"message\":\"$m\"}" http://dark-pipes.herokuapp.com/testuser
echo 
echo attempting to retrieve message from server
echo
echo
curl -s http://dark-pipes.herokuapp.com/testuser | grep "$m"
echo
echo done
