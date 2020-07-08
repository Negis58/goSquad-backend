const userInfo = require('../models/userInfo');
const user = require('../models/user');
class usersInfoController {

    getUsersInfo(req,res) {
        userInfo.find(function (err,user,next) {
            if (err) return next(err);
        }).populate('user').exec((err, user) => {
            res.json(user);
        });
    }

    getUserInfoByID(req,res,next) {
        userInfo.findById(req.params.id, function (err,user) {
            if (err) return next(err);
            res.json(user);
        });
    }
    createUserInfo(req,res,next) {
        const user = new userInfo({
            nickName: req.body.nickName,
            serviceIds: req.body.serviceIds,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dateOfBirth: req.body.dateOfBirth,
            voiceChat: req.body.voiceChat,
            platformIds: req.body.platformIds,
            country: req.body.country
        });
        user.save();
    }

    updateUserInfo(req,res,next) {
        userInfo.findById(req.params.id, function (err, user) {
            if (!user) {
                res.statusCode = 404;
                res.json({status: "Not found"});
            }
            else {
                user.nickName = req.body.nickName;
                user.serviceIds = req.body.serviceIds;
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;
                user.dateOfBirth = req.body.dateOfBirth;
                user.voiceChat = req.body.voiceChat;
                user.platformIds = req.body.platformIds;
                user.country = req.body.country;
                user.save();
                res.json({status: "Ok"});
            }
        })

    }

    removeUser(req,res,next) {
        const id = req.params.id;
        userInfo.remove({_id:id}).then(result=>{
            res.status(200).json(result);
        });
    }
}

module.exports = new usersInfoController();