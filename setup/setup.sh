FILE=config_backend.js
if [ -f $FILE ]; then
    cd ..
    git clone https://github.com/opentender-jm/opentender-data.git data
    git clone https://github.com/opentender-jm/opentender-backend.git backend
    git clone https://github.com/opentender-jm/opentender-frontend.git frontend
    cp setup/config_backend.js backend/config.js
    cp setup/config_frontend.js frontend/config.js
    cd backend
    npm install
    cd ..
    cd frontend
    npm install
    cd ..
    cd setup
else
   echo "You must run this file in the /setup/ folder"
fi

