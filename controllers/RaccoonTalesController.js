const jwt = require("jsonwebtoken");
const { User } = require("../models/models");
const {Wallet} = require("../models/TablesExchange/tableWallet");
const {BalanceCrypto} = require("../models/TablesExchange/tableBalanceCrypto");

class RaccoonTalesController {
    async RaccoonTales(req, res){
        const data = JSON.parse(req.body.data);
        let { request_id, bet, customVars, action, game} = data;
        const decodeToken = jwt.decode(customVars);
        console.log(req.body)
        const user = await User.findOne({
            where: { username: decodeToken.username },
        });
        const walletRUBId = await Wallet.findOne({where:{name: 'RUR'}})
        const walletRUBBalance = await BalanceCrypto.findOne({
            where: {
                userId: user.id,
                walletId: walletRUBId.id
            }
        })
        const init = {
            "balance":{"before":(+walletRUBBalance.balance),"after":(+walletRUBBalance.balance)},
            "denomination":"1",
            "init":{
                "bet":10,
                "fixed_bet":1,
                "lines":0,
                "ranges":{
                    "bet":{"1":{"0":0.1,"1":0.2,"2":0.3,"3":0.5,"4":0.7,"5":1,"6":2,"7":3,"8":5,"9":7.5,"10":10,"11":20,"12":30,"13":50,"14":75,"15":100,"16":200,"17":300,"18":500,"19":750,"20":1000,"21":2000,"22":3000,"23":5000,"24":7500,"25":10000,"26":20000,"27":30000}},
                    "denomination":{"0":1}},
                "currency":"DEMO",
                "restorestate":false,
                "extra":{"map":{"0":0,"1":0}},
                "next_request_id":2,
                "directory":{
                    "paytable":{
                        "2":{"5":1,"6":2,"7":7,"8":15,"9":25,"10":75,"11":75,"12":200,"13":200,"14":200,"15":500},
                        "3":{"5":0.7,"6":1.5,"7":2.5,"8":7.5,"9":10,"10":25,"11":25,"12":100,"13":100,"14":100,"15":250},
                        "4":{"5":0.5,"6":1,"7":3,"8":4,"9":7,"10":15,"11":15,"12":50,"13":50,"14":50,"15":100},
                        "5":{"5":0.4,"6":0.8,"7":2,"8":3,"9":5,"10":10,"11":10,"12":40,"13":40,"14":40,"15":80},
                        "6":{"5":0.3,"6":0.7,"7":1.5,"8":2,"9":4,"10":7,"11":7,"12":25,"13":25,"14":25,"15":50},
                        "7":{"5":0.2,"6":0.5,"7":1,"8":1.5,"9":3,"10":6,"11":6,"12":20,"13":20,"14":20,"15":40},
                        "8":{"5":0.1,"6":0.3,"7":0.8,"8":1,"9":2,"10":5,"11":5,"12":15,"13":15,"14":15,"15":30},
                        "9":{"5":0.1,"6":0.2,"7":0.5,"8":0.8,"9":1.5,"10":4,"11":4,"12":10,"13":10,"14":10,"15":20},
                        "0":{"3":{"freespin_count":10}},"1":{}},"rtp":96.2},
                "symbols":{"0":{"0":{"code":5},"1":{"code":9},"2":{"code":9},"3":{"code":6},"4":{"code":7},"5":{"code":4},"6":{"code":4}},"1":{"0":{"code":6},"1":{"code":6},"2":{"code":6},"3":{"code":7},"4":{"code":8},"5":{"code":9},"6":{"code":5}},"2":{"0":{"code":9},"1":{"code":2},"2":{"code":4},"3":{"code":9},"4":{"code":7},"5":{"code":6},"6":{"code":9}},"3":{"0":{"code":3},"1":{"code":4},"2":{"code":9},"3":{"code":8},"4":{"code":7},"5":{"code":6},"6":{"code":8}},"4":{"0":{"code":9},"1":{"code":0},"2":{"code":8},"3":{"code":9},"4":{"code":7},"5":{"code":5},"6":{"code":5}},"5":{"0":{"code":6},"1":{"code":9},"2":{"code":2},"3":{"code":2},"4":{"code":9},"5":{"code":4},"6":{"code":4}},"6":{"0":{"code":9},"1":{"code":6},"2":{"code":7},"3":{"code":4},"4":{"code":8},"5":{"code":2},"6":{"code":9}}},"collect":1},
            "available_actions":{"0":"spin"}
        }
        let val = 7;
        const balance = {"before":(+walletRUBBalance.balance),"after":(+walletRUBBalance.balance)};
        const denomination = 1;
        const symbols ={
            0:{
                0: {code: Math.floor(Math.random() * val) + 1},
                1: {code: Math.floor(Math.random() * val) + 1},
                2: {code: Math.floor(Math.random() * val) + 1},
                3: {code: Math.floor(Math.random() * val) + 1},
                4: {code: Math.floor(Math.random() * val) + 1},
                5: {code: Math.floor(Math.random() * val) + 1},
                6: {code: Math.floor(Math.random() * val) + 1},
            },
            1:{
                0: {code: Math.floor(Math.random() * val) + 1},
                1: {code: Math.floor(Math.random() * val) + 1},
                2: {code: Math.floor(Math.random() * val) + 1},
                3: {code: Math.floor(Math.random() * val) + 1},
                4: {code: Math.floor(Math.random() * val) + 1},
                5: {code: Math.floor(Math.random() * val) + 1},
                6: {code: Math.floor(Math.random() * val) + 1},
            },
            2:{
                0: {code: Math.floor(Math.random() * val) + 1},
                1: {code: Math.floor(Math.random() * val) + 1},
                2: {code: Math.floor(Math.random() * val) + 1},
                3: {code: Math.floor(Math.random() * val) + 1},
                4: {code: Math.floor(Math.random() * val) + 1},
                5: {code: Math.floor(Math.random() * val) + 1},
                6: {code: Math.floor(Math.random() * val) + 1},
            },
            3:{
                0: {code: Math.floor(Math.random() * val) + 1},
                1: {code: Math.floor(Math.random() * val) + 1},
                2: {code: Math.floor(Math.random() * val) + 1},
                3: {code: Math.floor(Math.random() * val) + 1},
                4: {code: Math.floor(Math.random() * val) + 1},
                5: {code: Math.floor(Math.random() * val) + 1},
                6: {code: Math.floor(Math.random() * val) + 1},
            },
            4:{
                0: {code: Math.floor(Math.random() * val) + 1},
                1: {code: Math.floor(Math.random() * val) + 1},
                2: {code: Math.floor(Math.random() * val) + 1},
                3: {code: Math.floor(Math.random() * val) + 1},
                4: {code: Math.floor(Math.random() * val) + 1},
                5: {code: Math.floor(Math.random() * val) + 1},
                6: {code: Math.floor(Math.random() * val) + 1},
            },
            5:{
                0: {code: Math.floor(Math.random() * val) + 1},
                1: {code: Math.floor(Math.random() * val) + 1},
                2: {code: Math.floor(Math.random() * val) + 1},
                3: {code: Math.floor(Math.random() * val) + 1},
                4: {code: Math.floor(Math.random() * val) + 1},
                5: {code: Math.floor(Math.random() * val) + 1},
                6: {code: Math.floor(Math.random() * val) + 1},
            },
            6:{
                0: {code: Math.floor(Math.random() * val) + 1},
                1: {code: Math.floor(Math.random() * val) + 1},
                2: {code: Math.floor(Math.random() * val) + 1},
                3: {code: Math.floor(Math.random() * val) + 1},
                4: {code: Math.floor(Math.random() * val) + 1},
                5: {code: Math.floor(Math.random() * val) + 1},
                6: {code: Math.floor(Math.random() * val) + 1},
            }
        }
        const multiplier = 1
        const wins = {
            pos_wins:{
                0:{
                    type:"group",
                    code: 6,
                    pos:{
                        0:{0:4, 1:5},
                        1:{0:5, 1:3},
                        2:{0:4, 1:4},
                        3:{0:5, 1:5},
                        4:{0:6, 1:3},
                    },
                    multiplier:multiplier,
                    amount:3,
                    extra:{}
                }
            },
            total: 3
        }
        let maps = 12
        const map ={
            0:Math.floor(Math.random() * maps +1), 1: Math.floor(Math.random() * maps)
        }
        const extra = {
            creature_hit: 0,
            map
        }
        const spins ={
            lines: 0,
            bet: bet,
            fixed_bet: 1,
            type:'spin',
            symbols,
            wins,
            multiplier:multiplier,
            extra
        }
        const spin = {balance,denomination, spin:spins}
        const spinss = {
            "denomination":"1",
            "spin":{
                "lines":0,
                "bet":10,
                "fixed_bet":1,
                "type":"spin",
               "multiplier":1,"extra":{"creature_hit":0,
                    "map":{"0":0,"1":2}},"drop":{"pos":{"0":{"0":4,"1":5},"1":{"0":5,"1":3},"2":{"0":5,"1":4},"3":{"0":5,"1":5},"4":{"0":6,"1":3}}},"drop_chain":{"count":0,"wins":{"total":0,"win_before_chain":3}}},"available_actions":{"0":"drop"},"macro_round":{"wins":{"total":3}}}
        if (action === 'init'){
            return res.json(init)
        }else {
            return res.json(spin)
        }
    }

}
module.exports = new RaccoonTalesController();