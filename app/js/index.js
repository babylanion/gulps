

//城市对照集合
var arrCity = new Array(
    ['010', '北京市', 'beijing', 'bj', '110000'],
    ['021', '上海市', 'shanghai', 'sh', '310000'],
    ['022', '天津市', 'tianjin', 'tj', '120000'],
    ['020', '广州市', 'guangzhou', 'gd_gz', '440100'],
    ['0755', '深圳市', 'shenzhen', 'gd_sz', '440300'],
    ['023', '重庆市', 'chongqing', 'cq', '500000'],
    ['0311', '河北省', 'hebei', 'hb', '130000'],
    ['0351', '山西省', 'shanxi', 'sx', '140000'],
    ['0471', '内蒙古自治区', 'neimenggu', 'nmg', '150000'],
    ['024', '辽宁省', 'liaoning', 'ln', '210000'],
    ['0431', '吉林省', 'jilin', 'jl', '220000'],
    ['0451', '黑龙江省', 'heilongjiang', 'hlj', '230000'],
    ['025', '江苏省', 'jiangsu', 'js', '320000'],
    ['0571', '浙江省', 'zhejiang', 'zj', '330000'],
    ['0551', '安徽省', 'anhui', 'ah', '340000'],
    ['0591', '福建省', 'fujian', 'fj', '350000'],
    ['0791', '江西省', 'jiangxi', 'jx', '360000'],
    ['0531', '山东省', 'shandong', 'sd', '370000'],
    ['0371', '河南省', 'henan', 'hn', '410000'],
    ['027', '湖北省', 'hubei', 'hb', '420000'],
    ['0731', '湖南省', 'hunan', 'hn', '430000'],
    ['020', '广东省', 'guangdong', 'gd', '440000'],
    ['0771', '广西壮族自治区', 'guangxi', 'gx', '450000'],
    ['0898', '海南省', 'hainan', 'hn', '469000'],
    ['028', '四川省', 'sichuan', 'sc', '510000'],
    ['0851', '贵州省', 'guizhou', 'gz', '520000'],
    ['0871', '云南省', 'yunnan', 'yn', '530000'],
    ['0891', '西藏自治区', 'xizang', 'xz', '540000'],
    ['029', '陕西省', 'shanxi', 'sx', '610000'],
    ['0931', '甘肃省', 'gansu', 'gs', '620000'],
    ['0951', '宁夏回族自治区', 'ningxia', 'nx', '640000'],
    ['0971', '青海省', 'qinghai', 'qh', '630000'],
    ['0991', '新疆维吾尔自治区', 'xinjiang', 'xj', '650000'],
    ['0991', '新疆直辖行政单位', 'xinjiang', 'xj', '659000'],
    ['', '澳门', 'aomen', 'am', '820000'],
    ['', '香港', 'xianggang', 'xg', '810000'],
    ['', '台湾省', 'taiwan', 'tw', '710000'],
    ['0311', '石家庄市', 'shijiazhuang', 'hb_sjz', '130100'],
    ['0315', '唐山市', 'tangshan', 'hb_ts', '130200'],
    ['0335', '秦皇岛', 'qinhuangdao', 'hb_qhd', '130300'],
    ['0310', '邯郸市', 'handan', 'hb_hd', '130400'],
    ['0319', '邢台市', 'xingtai', 'hb_xta', '130500'],
    ['0312', '保定市', 'baoding', 'hb_bd', '130600'],
    ['0313', '张家口', 'zhangjiakou', 'hb_zjk', '130700'],
    ['0314', '承德市', 'chengde', 'hb_cd', '130800'],
    ['0317', '沧州市', 'cangzhou', 'hb_cz', '130900'],
    ['0316', '廊坊市', 'langfang', 'hb_lf', '131000'],
    ['0318', '衡水市', 'hengshui', 'hb_hs', '131100'],
    ['0351', '太原市', 'taiyuan', 'sx_ty', '140100'],
    ['0352', '大同市', 'datong', 'sx_dt', '140200'],
    ['0353', '阳泉市', 'yangquan', 'sx_yq', '140300'],
    ['0355', '长治市', 'changzhi', 'sx_cz', '140400'],
    ['0356', '晋城市', 'jincheng', 'sx_jc', '140500'],
    ['0349', '朔州市', 'shuozhou', 'sx_sz', '140600'],
    ['0354', '晋中市', 'jinzhong', 'sx_jz', '140700'],
    ['0359', '运城市', 'yuncheng', 'sx_yc', '140800'],
    ['0350', '忻州市', 'xinzhou', 'sx_xz', '140900'],
    ['0357', '临汾市', 'linfen', 'sx_lf', '141000'],
    ['0358', '吕梁市', 'lvliang', 'sx_ll', '141100'],
    ['0471', '呼和浩特', 'huhehaote', 'nmg_hhht', '150100'],
    ['0472', '包头市', 'baotou', 'nmg_bt', '150200'],
    ['0473', '乌海市', 'wuhai', 'nmg_wh', '150300'],
    ['0476', '赤峰市', 'chifeng', 'nmg_cf', '150400'],
    ['0475', '通辽市', 'tongliao', 'nmg_tl', '150500'],
    ['0477', '鄂尔多斯市', 'eerduosi', 'nmg_eeds', '150600'],
    ['0470', '呼伦贝尔', 'hulunbeier', 'nmg_hlbe', '150700'],
    ['0478', '巴彦淖尔市', 'bayannaoer', 'nmg_byze', '150800'],
    ['0474', '乌兰察布市', 'wulanchabu', 'nmg_wlcb', '150900'],
    ['0313', '兴安盟', 'xinganmeng', 'nmg_xa', '152200'],
    ['0479', '锡林郭勒盟', 'xilinguole', 'nmg_xlgl', '152500'],
    ['0483', '阿拉善盟', 'alashanmeng', 'nmg_alsm', '152900'],
    ['024', '沈阳市', 'shenyang', 'ln_sy', '210100'],
    ['0411', '大连市', 'dalian', 'ln_dl', '210200'],
    ['0412', '鞍山市', 'anshan', 'ln_as', '210300'],
    ['0413', '抚顺市', 'fushun', 'ln_fs', '210400'],
    ['0414', '本溪市', 'benxi', 'ln_bx', '210500'],
    ['0415', '丹东市', 'dandong', 'ln_dd', '210600'],
    ['0416', '锦州市', 'jinzhou', 'ln_jz', '210700'],
    ['0417', '营口市', 'yingkou', 'ln_yk', '210800'],
    ['0418', '阜新市', 'fuxin', 'ln_fx', '210900'],
    ['0419', '辽阳市', 'liaoyang', 'ln_ly', '211000'],
    ['0427', '盘锦市', 'panjin', 'ln_pj', '211100'],
    ['0410', '铁岭市', 'tieling', 'ln_tl', '211200'],
    ['0421', '朝阳市', 'chaoyang', 'ln_cy', '211300'],
    ['0429', '葫芦岛市', 'huludao', 'ln_hld', '211400'],
    ['0431', '长春市', 'changchun', 'jl_cc', '220100'],
    ['0432', '吉林市', 'jilin', 'jl_jl', '220200'],
    ['0434', '四平市', 'siping', 'jl_sp', '220300'],
    ['0437', '辽源市', 'liaoyuan', 'jl_ly', '220400'],
    ['0435', '通化市', 'tonghua', 'jl_th', '220500'],
    ['0439', '白山市', 'baishan', 'jl_bs', '220600'],
    ['0438', '松原市', 'songyuan', 'jl_sy', '220700'],
    ['0436', '白城市', 'baicheng', 'jl_bc', '220800'],
    ['0433', '延边朝鲜族', 'yanbian', 'jl_yb', '222400'],
    ['0451', '哈尔滨市', 'haerbin', 'hlj_heb', '230100'],
    ['0452', '齐齐哈尔市', 'qiqihaer', 'hlj_qqhe', '230200'],
    ['0467', '鸡西市', 'jixi', 'hlj_jx', '230300'],
    ['0468', '鹤岗市', 'hegang', 'hlj_hg', '230400'],
    ['0469', '双鸭山市', 'shuangyashan', 'hlj_sys', '230500'],
    ['0459', '大庆市', 'daqing', 'hlj_dq', '230600'],
    ['0458', '伊春市', 'yichun', 'hlj_yc', '230700'],
    ['0454', '佳木斯市', 'jiamusi', 'hlj_jms', '230800'],
    ['0464', '七台河市', 'qitaihe', 'hlj_qth', '230900'],
    ['0453', '牡丹江市', 'mudanjiang', 'hlj_mdj', '231000'],
    ['0456', '黑河市', 'heihe', 'hlj_hh', '231100'],
    ['0455', '绥化市', 'suihua', 'hlj_sh', '231200'],
    ['0457', '大兴安岭', 'daxinganling', 'hlj_dxal', '232700'],
    ['025', '南京市', 'nanjing', 'js_nj', '320100'],
    ['0510', '无锡市', 'wuxi', 'js_wx', '320200'],
    ['0516', '徐州市', 'xuzhou', 'js_xz', '320300'],
    ['0519', '常州市', 'changzhou', 'js_cz', '320400'],
    ['0512', '苏州市', 'suzhou', 'js_sz', '320500'],
    ['0513', '南通市', 'nantong', 'js_nt', '320600'],
    ['0518', '连云港市', 'lianyungang', 'js_lyg', '320700'],
    ['0517', '淮安市', 'huaian', 'js_ha', '320800'],
    ['0515', '盐城市', 'yancheng', 'js_yc', '320900'],
    ['0514', '扬州市', 'yangzhou', 'js_yz', '321000'],
    ['0511', '镇江市', 'zhenjiang', 'js_zj', '321100'],
    ['0523', '泰州市', 'taizhou', 'js_tz', '321200'],
    ['0527', '宿迁市', 'suqian', 'js_sq', '321300'],
    ['0571', '杭州市', 'hangzhou', 'zj_hz', '330100'],
    ['0574', '宁波市', 'ningbo', 'zj_nb', '330200'],
    ['0577', '温州市', 'wenzhou', 'zj_wz', '330300'],
    ['0573', '嘉兴市', 'jiaxing', 'zj_jx', '330400'],
    ['0572', '湖州市', 'huzhou', 'zj_hzh', '330500'],
    ['0575', '绍兴市', 'shaoxing', 'zj_sx', '330600'],
    ['0579', '金华市', 'jinhua', 'zj_jh', '330700'],
    ['0570', '衢州市', 'quzhou', 'zj_qz', '330800'],
    ['0580', '舟山市', 'zhoushan', 'zj_zs', '330900'],
    ['0576', '台州市', 'tzhou', 'zj_tz', '331000'],
    ['0578', '丽水市', 'lishui', 'zj_ls', '331100'],
    ['0551', '合肥市', 'hefei', 'ah_hf', '340100'],
    ['0553', '芜湖市', 'wuhu', 'ah_wh', '340200'],
    ['0552', '蚌埠市', 'bengbu', 'ah_bb', '340300'],
    ['0554', '淮南市', 'huainan', 'ah_hn', '340400'],
    ['0555', '马鞍山市', 'maanshan', 'ah_mas', '340500'],
    ['0561', '淮北市', 'huaibei', 'ah_hb', '340600'],
    ['0562', '铜陵市', 'tongling', 'ah_tl', '340700'],
    ['0556', '安庆市', 'anqing', 'ah_aq', '340800'],
    ['0559', '黄山市', 'huangshan', 'ah_hs', '341000'],
    ['0550', '滁州市', 'chuzhou', 'ah_cz', '341100'],
    ['0558', '阜阳市', 'fuyang', 'ah_fy', '341200'],
    ['0557', '宿州市', 'suzhou', 'ah_sz', '341300'],
    ['0565', '巢湖市', 'chaohu', 'ah_ch', '340181'],
    ['0564', '六安市', 'liuan', 'ah_la', '341500'],
    ['0558', '亳州市', 'bozhou', 'ah_bz', '341600'],
    ['0566', '池州市', 'chizhou', 'ah_cz', '341700'],
    ['0563', '宣城市', 'xuancheng', 'ah_xc', '341800'],
    ['0591', '福州市', 'fuzhou', 'fj_fz', '350100'],
    ['0592', '厦门市', 'xiamen', 'fj_xm', '350200'],
    ['0594', '莆田市', 'putian', 'fj_pt', '350300'],
    ['0598', '三明市', 'sanming', 'fj_sm', '350400'],
    ['0595', '泉州市', 'quanzhou', 'fj_qz', '350500'],
    ['0596', '漳州市', 'zhangzhou', 'fj_zz', '350600'],
    ['0599', '南平市', 'nanping', 'fj_np', '350700'],
    ['0597', '龙岩市', 'longyan', 'fj_ly', '350800'],
    ['0593', '宁德市', 'ningde', 'fj_nd', '350900'],
    ['0313', '南昌市', 'nanchang', 'jx_nc', '360100'],
    ['0798', '景德镇市', 'jingdezhen', 'jx_jdz', '360200'],
    ['0799', '萍乡市', 'pingxiang', 'jx_px', '360300'],
    ['0792', '九江市', 'jiujiang', 'jx_jj', '360400'],
    ['0790', '新余市', 'xinyu', 'jx_xy', '360500'],
    ['0701', '鹰潭市', 'yingtan', 'jx_yt', '360600'],
    ['0797', '赣州市', 'ganzhou', 'jx_gz', '360700'],
    ['0796', '吉安市', 'jian', 'jx_ja', '360800'],
    ['0795', '宜春市', 'yi_chun', 'jx_yc', '360900'],
    ['0794', '抚州市', 'fu_zhou', 'jx_fz', '361000'],
    ['0793', '上饶市', 'shangrao', 'jx_sr', '361100'],
    ['0531', '济南市', 'jinan', 'sd_jn', '370100'],
    ['0532', '青岛市', 'qingdao', 'sd_qd', '370200'],
    ['0533', '淄博市', 'zibo', 'sd_zb', '370300'],
    ['0632', '枣庄市', 'zaozhuang', 'sd_zz', '370400'],
    ['0546', '东营市', 'dongying', 'sd_dy', '370500'],
    ['0535', '烟台市', 'yantai', 'sd_yt', '370600'],
    ['0536', '潍坊市', 'weifang', 'sd_wf', '370700'],
    ['0537', '济宁市', 'jining', 'sd_jni', '370800'],
    ['0538', '泰安市', 'taian', 'sd_ta', '370900'],
    ['0631', '威海市', 'weihai', 'sd_wh', '371000'],
    ['0633', '日照市', 'rizhao', 'sd_rz', '371100'],
    ['0634', '莱芜市', 'laiwu', 'sd_lw', '371200'],
    ['0539', '临沂市', 'linyi', 'sd_ly', '371300'],
    ['0534', '德州市', 'dezhou', 'sd_dz', '371400'],
    ['0635', '聊城市', 'liaocheng', 'sd_lc', '371500'],
    ['0543', '滨州市', 'binzhou', 'sd_bz', '371600'],
    ['0530', '荷泽市', 'heze', 'sd_hz', '371700'],
    ['0371', '郑州市', 'zhengzhou', 'hn_zzh', '410100'],
    ['0378', '开封市', 'kaifeng', 'hn_kf', '410200'],
    ['0379', '洛阳市', 'luoyang', 'hn_ly', '410300'],
    ['0375', '平顶山市', 'pingdingshan', 'hn_pts', '410400'],
    ['0372', '安阳市', 'anyang', 'hn_ay', '410500'],
    ['0392', '鹤壁市', 'hebi', 'hn_hb', '410600'],
    ['0373', '新乡市', 'xinxiang', 'hn_xx', '410700'],
    ['0391', '焦作市', 'jiaozuo', 'hn_jz', '410800'],
    ['0393', '濮阳市', 'puyang', 'hn_py', '410900'],
    ['0374', '许昌市', 'xuchang', 'hn_xc', '411000'],
    ['0395', '漯河市', 'luohe', 'hn_lh', '411100'],
    ['0398', '三门峡市', 'sanmenxia', 'hn_smx', '411200'],
    ['0377', '南阳市', 'nanyang', 'hn_ny', '411300'],
    ['0370', '商丘市', 'shangqiu', 'hn_sq', '411400'],
    ['0376', '信阳市', 'xinyang', 'hn_xy', '411500'],
    ['0394', '周口市', 'zhoukou', 'hn_zk', '411600'],
    ['0396', '驻马店市', 'zhumadian', 'hn_zmd', '411700'],
    ['0391', '济源市', 'jiyuan', 'hn_jy', '419001'],
    ['027', '武汉市', 'wuhan', 'hb_wh', '420100'],
    ['0714', '黄石市', 'huangshi', 'hb_hs', '420200'],
    ['0719', '十堰市', 'shiyan', 'hb_sy', '420300'],
    ['0717', '宜昌市', 'yichang', 'hb_yc', '420500'],
    ['0710', '襄樊市', 'xiangyang', 'hb_xf', '420600'],
    ['0711', '鄂州市', 'ezhou', 'hb_ez', '420700'],
    ['0724', '荆门市', 'jingmen', 'hb_jm', '420800'],
    ['0712', '孝感市', 'xiaogan', 'hb_xg', '420900'],
    ['0716', '荆州市', 'jingzhou', 'hb_jz', '421000'],
    ['0713', '黄冈市', 'huanggang', 'hb_hg', '421100'],
    ['0715', '咸宁市', 'xianning', 'hb_xn', '421200'],
    ['0722', '随州市', 'suizhou', 'hb_sz', '421300'],
    ['0718', '恩施市', 'enshi', 'hb_es', '422800'],
    ['0728', '仙桃市', 'xiantao', 'hb_xt', '429004'],
    ['0728', '潜江市', 'qianjiang', 'hb_qj', '429005'],
    ['0728', '天门市', 'tianmen', 'hb_tm', '429006'],
    ['0719', '神农架林区', 'shennongjia', 'hb_snj', '429021'],
    ['0731', '长沙市', 'changsha', 'hn_cs', '430100'],
    ['0731', '株洲市', 'zhuzhou', 'hn_zz', '430200'],
    ['0731', '湘潭市', 'xiangtan', 'hn_xt', '430300'],
    ['0734', '衡阳市', 'hengyang', 'hn_hy', '430400'],
    ['0739', '邵阳市', 'shaoyang', 'hn_sya', '430500'],
    ['0730', '岳阳市', 'yueyang', 'hn_yy', '430600'],
    ['0736', '常德市', 'changde', 'hn_cd', '430700'],
    ['0744', '张家界市', 'zhangjiajie', 'hn_zjj', '430800'],
    ['0737', '益阳市', 'yiyang', 'hn_yy', '430900'],
    ['0735', '郴州市', 'chenzhou', 'hn_cz', '431000'],
    ['0746', '永州市', 'yongzhou', 'hn_yz', '431100'],
    ['0745', '怀化市', 'huaihua', 'hn_hh', '431200'],
    ['0738', '娄底市', 'loudi', 'hn_ldi', '431300'],
    ['0743', '湘西土家族苗族', 'xiangxi', 'hn_xx', '433100'],
    ['0751', '韶关市', 'shaoguan', 'gd_sg', '440200'],
    ['0756', '珠海市', 'zhuhai', 'gd_zh', '440400'],
    ['0754', '汕头市', 'shantou', 'gd_st', '440500'],
    ['0757', '佛山市', 'foshan', 'gd_fs', '440600'],
    ['0750', '江门市', 'jiangmen', 'gd_jm', '440700'],
    ['0759', '湛江市', 'zhanjiang', 'gd_zj', '440800'],
    ['0668', '茂名市', 'maoming', 'gd_mm', '440900'],
    ['0758', '肇庆市', 'zhaoqing', 'gd_zq', '441200'],
    ['0752', '惠州市', 'huizhou', 'gd_hz', '441300'],
    ['0753', '梅州市', 'meizhou', 'gd_mz', '441400'],
    ['0660', '汕尾市', 'shanwei', 'gd_sw', '441500'],
    ['0762', '河源市', 'heyuan', 'gd_hy', '441600'],
    ['0662', '阳江市', 'yangjiang', 'gd_yj', '441700'],
    ['0763', '清远市', 'qingyuan', 'gd_qy', '441800'],
    ['0769', '东莞市', 'dongguan', 'gd_d', '441900'],
    ['0760', '中山市', 'zhongshan', 'gd_zs', '442000'],
    ['0768', '潮州市', 'chaozhou', 'gd_sz', '445100'],
    ['0663', '揭阳市', 'jieyang', 'gd_jy', '445200'],
    ['0766', '云浮市', 'yunfu', 'gd_yf', '445300'],
    ['0771', '南宁市', 'nanning', 'gx_nn', '450100'],
    ['0772', '柳州市', 'liuzhou', 'gx_lz', '450200'],
    ['0773', '桂林市', 'guilin', 'gx_gl', '450300'],
    ['0774', '梧州市', 'wuzhou', 'gx_wz', '450400'],
    ['0779', '北海市', 'beihai', 'gx_bh', '450500'],
    ['0770', '防城港市', 'fangchenggang', 'gx_fcg', '450600'],
    ['0777', '钦州市', 'qinzhou', 'gx_qz', '450700'],
    ['0775', '贵港市', 'guigang', 'gx_gg', '450800'],
    ['0775', '玉林市', 'ylin', 'gx_yl', '450900'],
    ['0776', '百色市', 'baise', 'gx_bs', '451000'],
    ['0774', '贺州市', 'hezhou', 'gx_hz', '451100'],
    ['0778', '河池市', 'hechi', 'gx_hc', '451200'],
    ['0772', '来宾市', 'laibin', 'gx_lb', '451300'],
    ['0771', '崇左市', 'chongzuo', 'gx_cz', '451400'],
    ['0898', '海口市', 'haikou', 'hn_hk', '460100'],
    ['0898', '三亚市', 'sanya', 'hn_sy', '460200'],
    ['028', '成都市', 'chengdu', 'sc_cd', '510100'],
    ['0813', '自贡市', 'zigong', 'sc_zg', '510300'],
    ['0812', '攀枝花市', 'panzhihua', 'sc_pzh', '510400'],
    ['0830', '泸州市', 'luzhou', 'sc_lz', '510500'],
    ['0838', '德阳市', 'deyang', 'sc_dy', '510600'],
    ['0816', '绵阳市', 'mianyang', 'sc_my', '510700'],
    ['0839', '广元市', 'guangyuan', 'sc_gy', '510800'],
    ['0825', '遂宁市', 'suining', 'sc_sn', '510900'],
    ['0832', '内江市', 'neijiang', 'sc_nj', '511000'],
    ['0833', '乐山市', 'leshan', 'sc_ls', '511100'],
    ['0817', '南充市', 'nanchong', 'sc_nc', '511300'],
    ['028', '眉山市', 'meishan', 'sc_ms', '511400'],
    ['0831', '宜宾市', 'yibin', 'sc_yb', '511500'],
    ['0826', '广安市', 'guangan', 'sc_ga', '511600'],
    ['0818', '达州市', 'dazhou', 'sc_dz', '511700'],
    ['0835', '雅安市', 'yaan', 'sc_ya', '511800'],
    ['0827', '巴中市', 'bazhong', 'sc_bz', '511900'],
    ['028', '资阳市', 'ziyang', 'sc_zy', '512000'],
    ['0837', '阿坝藏族', 'aba', 'sc_ab', '513200'],
    ['0836', '甘孜藏族', 'ganzi', 'sc_gz', '513300'],
    ['0834', '凉山彝族', 'liangshan', 'sc_ls', '513400'],
    ['0851', '贵阳市', 'guiyang', 'gz_gy', '520100'],
    ['0858', '六盘水市', 'liupanshui', 'gz_lps', '520200'],
    ['0852', '遵义市', 'zunyi', 'gz_zy', '520300'],
    ['0853', '安顺市', 'anshun', 'gz_as', '520400'],
    ['0856', '铜仁', 'tongren', 'gz_tr', '522200'],
    ['0859', '黔西南布依族苗族', 'qianxinan', 'gz_qxn', '522300'],
    ['0857', '毕节区', 'bijiequ', 'gz_bj', '522400'],
    ['0855', '黔东南苗族侗族', 'qiandongnan', 'gz_qdn', '522600'],
    ['0854', '黔南布依族苗族', 'qiannan', 'gz_qn', '522700'],
    ['0871', '昆明市', 'kunming', 'yn_km', '530100'],
    ['0874', '曲靖市', 'qujing', 'yn_qj', '530300'],
    ['0877', '玉溪市', 'yuxi', 'yn_yx', '530400'],
    ['0875', '保山市', 'baoshan', 'yn_bs', '530500'],
    ['0870', '昭通市', 'zhaotong', 'yn_zt', '530600'],
    ['0888', '丽江市', 'lijiang', 'yn_lj', '530700'],
    ['0879', '思茅市', 'puer', 'yn_pe', '530800'],
    ['0883', '临沧市', 'lincang', 'yn_lc', '530900'],
    ['0878', '楚雄彝族', 'chuxiong', 'yn_cx', '532300'],
    ['0873', '红河哈尼族彝族', 'honghe', 'yn_hh', '532500'],
    ['0876', '文山壮族苗族', 'wenshan', 'yn_ws', '532600'],
    ['0691', '西双版纳傣族', 'xishuangbanna', 'yn_xsbn', '532800'],
    ['0872', '大理白族', 'dali', 'yn_dl', '532900'],
    ['0692', '德宏傣族景颇族', 'dehong', 'yn_dh', '533100'],
    ['0886', '怒江傈僳族', 'nujiang', 'yn_nj', '533300'],
    ['0887', '迪庆藏族', 'diqing', 'yn_dq', '533400'],
    ['0891', '拉萨市', 'lasa', 'xz_ls', '540100'],
    ['0895', '昌都', 'changdu', 'xz_cd', '542100'],
    ['0893', '山南', 'shannan', 'xz_sn', '542200'],
    ['0892', '日喀则', 'rikeze', 'xz_rkz', '542300'],
    ['0896', '那曲地区', 'naqu', 'xz_nq', '542400'],
    ['0897', '阿里地区', 'ali', 'xz_al', '542500'],
    ['0894', '林芝地区', 'linzhi', 'xz_lz', '542600'],
    ['029', '西安市', 'xian', 'sx_xa', '610100'],
    ['0919', '铜川市', 'tongchuan', 'sx_tc', '610200'],
    ['0917', '宝鸡市', 'baoji', 'sx_bj', '610300'],
    ['029', '咸阳市', 'xianyang', 'sx_xy', '610400'],
    ['0913', '渭南市', 'weinan', 'sx_wn', '610500'],
    ['0911', '延安市', 'yanan', 'sx_ya', '610600'],
    ['0916', '汉中市', 'hanzhong', 'sx_hz', '610700'],
    ['0912', '榆林市', 'yulin', 'sx_yl', '610800'],
    ['0915', '安康市', 'ankang', 'sx_ak', '610900'],
    ['0914', '商洛市', 'shangluo', 'sx_sl', '611000'],
    ['0931', '兰州市', 'lanzhou', 'gs_lz', '620100'],
    ['0937', '嘉峪关市', 'jiayuguan', 'gs_jyg', '620200'],
    ['0935', '金昌市', 'jinchang', 'gs_jc', '620300'],
    ['0943', '白银市', 'baiyin', 'gs_by', '620400'],
    ['0938', '天水市', 'tianshui', 'gs_ts', '620500'],
    ['0935', '武威市', 'wuwei', 'gs_ww', '620600'],
    ['0936', '张掖市', 'zhangye', 'gs_zy', '620700'],
    ['0933', '平凉市', 'pingliang', 'gs_pl', '620800'],
    ['0937', '酒泉市', 'jiuquan', 'gs_jq', '620900'],
    ['0934', '庆阳市', 'qingyang', 'gs_qy', '621000'],
    ['0932', '定西市', 'dingxi', 'gs_dx', '621100'],
    ['0939', '陇南市', 'longnan', 'gs_ln', '621200'],
    ['0930', '临夏回族', 'linxia', 'gs_lx', '622900'],
    ['0941', '甘南藏族', 'gannan', 'gs_gn', '623000'],
    ['0971', '西宁市', 'xining', 'qh_xn', '630100'],
    ['0972', '海东', 'haidong', 'qh_hd', '632100'],
    ['0970', '海北藏族', 'haibei', 'qh_hb', '632200'],
    ['0973', '黄南藏族', 'huangnan', 'qh_hn', '632300'],
    ['0974', '海南藏族', 'hainan', 'qh_hn', '632500'],
    ['0975', '果洛藏族', 'guoluo', 'qh_gl', '632600'],
    ['0976', '玉树藏族', 'yushu', 'qh_ys', '632700'],
    ['0979', '海西蒙古族藏族', 'haixi', 'qh_hx', '632800'],
    ['0951', '银川市', 'yinchuan', 'nx_yc', '640100'],
    ['0952', '石嘴山市', 'shizuishan', 'nx_szs', '640200'],
    ['0953', '吴忠市', 'wuzhong', 'nx_wz', '640300'],
    ['0954', '固原市', 'guyuan', 'nx_gy', '640400'],
    ['0955', '中卫市', 'zhongwei', 'nx_zw', '640500'],
    ['0991', '乌鲁木齐市', 'wulumuqi', 'xj_wlmq', '650100'],
    ['0990', '克拉玛依市', 'kelamayi', 'xj_klmy', '650200'],
    ['0995', '吐鲁番地区', 'tulufan', 'xj_tlf', '652101'],
    ['0902', '哈密地区', 'hami', 'xj_hm', '652200'],
    ['0994', '昌吉回族', 'changji', 'xj_cj', '652300'],
    ['0909', '博尔塔拉', 'boertala', 'xj_betl', '652700'],
    ['0996', '巴音郭楞', 'bayinguoleng', 'xj_bygl', '652800'],
    ['0997', '阿克苏地区', 'akesu', 'xj_aks', '652900'],
    ['0908', '克孜勒苏柯尔克孜', 'kezilesukeerkezi', 'xj_kzlskekz', '653000'],
    ['0998', '喀什地区', 'kashi', 'xj_ks', '653100'],
    ['0903', '和田地区', 'hetian', 'xj_ht', '653200'],
    ['0999', '伊犁哈萨克', 'yilihasake', 'xj_ylhsk', '654000'],
    ['0901', '塔城地区', 'tacheng', 'xj_tc', '654200'],
    ['0906', '阿勒泰地区', 'aletai', 'xj_alt', '654300'],
    ['0993', '石河子市', 'shihezi', 'xj_shz', '659001'],
    ['0998', '图木舒克市', 'tumushuke', 'xj_tmsk', '659003'],
    ['0512', '昆山市', 'kunshan', 'js_ks', '320583'],
    ['0433', '延吉市', 'yanji', 'jl_yj', '220900']);

jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
var auto_iploc = jQuery.cookie("auto_iploc");
$(function () {
    if (auto_iploc == undefined || auto_iploc == null || auto_iploc == "") {
        jQuery.ajax({
            //url:'http://s.auto.ifeng.com/locip/cityname',
            url: 'http://s.auto.ifeng.com/locip/getLoc',
            type: 'get',
            async: false,
            success: function (data) {
                var jsond = eval(data.split('(')[1].replace(')', ''));
                var ifengcookie = '';
                if (jsond == null || jsond == undefined || jsond.length < 1 || jsond[0].code == undefined || jsond[0].code == null || jsond[0].code == "") {
                    ifengcookie = "CN110000";
                } else {
                    if (parseInt(jsond[0].code) == -1) {
                        ifengcookie = "CN110000";
                        throw new error('IP格式不正确');
                    } else if (parseInt(jsond[0].code) == -2) {
                        ifengcookie = "CN110000";
                        throw new error('IP未解析出任何数据');
                    } else if (parseInt(jsond[0].code) == -3) {
                        ifengcookie = "CN110000";
                        throw new error('IP未解析出任何国家');
                    } else if (parseInt(jsond[0].code) == -4) {
                        ifengcookie = "CN110000";
                        throw new error('IP未解析出城市名称');
                    } else if (parseInt(jsond[0].code) == -5) {
                        ifengcookie = "CN110000";
                        throw new error('数据库表中未解析出相关城市');
                    } else {
                        ifengcookie = jsond[0].code;
                    }
                }
                var exp = new Date();
                exp.setTime(exp.getTime() + 120 * 60 * 1000);
                jQuery.cookie("auto_iploc", ifengcookie, {expires: exp});

            },
            error: function (xhr, errm) {
                throw new error('error get IP:' + errm);
            }
        });
        $.ajax({
            url: 'http://api.auto.ifeng.com/app/api/ip_check.php?code=' + getNum(jQuery.cookie("auto_iploc")) + '',
            type: 'get',
            dataType: 'jsonp',
            jsonp: 'CallBack',
            jsonpCallBack: 'tmpfun',
            success: function (data) {

            }
        })
    }
});
function getNum(text) {
    var value;
    value = text.replace(/[^0-9]/ig, "");
    return value;
}


/*setIP*/
function setIP(){
    auto_iploc=jQuery.cookie("auto_iploc");
    if(auto_iploc==null || auto_iploc==''){
        auto_iploc='CN110000';
    }
    var winurl=window.location.href;
    if(/city=\d+/ig.test(winurl)){
        auto_iploc=/city=(\d+)/ig.exec(winurl)[1];
    }
    for(var i=0;i<arrCity.length;i++){
        if(auto_iploc.replace(/cn/i,'')==arrCity[i][4]){
            $("#loc_position").html('<span></span><p>'+arrCity[i][1].replace('市','')+'</p>');
            console.log(arrCity[i][1]);
            break;
        }
    }
}
setIP();

// JavaScript Document
window.onload = function () {
    //Menu
    var slMenu = document.getElementById("slMenu"),
        slMenuSpan = slMenu.getElementsByTagName("span"),
        main = document.getElementById("main"),
        slNavBox = document.getElementById("slNavBox"),
        mobile_ap_functions = document.getElementById("slNavBoxBg");

    slMenu.addEventListener('click', function () {
        if (this.clientHeight == 17) {
            this.style.height = 16 + "px";
            slMenuSpan[0].style.webkitTransform = "rotate(45deg) translate(5px,5px)";
            slMenuSpan[1].style.opacity = 0;
            slMenuSpan[2].style.webkitTransform = "rotate(-45deg) translate(5px,-5px)";
            slNavBox.style.height = "auto";
            slNavBoxBg.style.height = main.clientHeight - 50 + "px";
        } else {
            this.style.height = 17 + "px";
            slMenuSpan[0].style.webkitTransform = "rotate(0deg) translate(0px,0px)";
            slMenuSpan[1].style.opacity = 1;
            slMenuSpan[2].style.webkitTransform = "rotate(0deg) translate(0px,0px)";
            slNavBox.style.height = 0;
            slNavBoxBg.style.height = 0;
        }
    }, false);

    // nav
    var i_nav = document.getElementById("i_nav");
    i_nav_a = i_nav.getElementsByTagName("a"),
        i_nav_btn = document.getElementById("i_nav_btn"),
        total_h = document.body.clientHeight,
//                nav_show_hide = "none",//导航展开功能
        i_nav_btn_totate = 0;
    function nav_slide() {
        i_nav_btn.style.transform = "rotate(" + i_nav_btn_totate + "deg)";
//            for (var i = 0, len = i_nav_a.length - 1; i < len; i++) {//导航展开功能
//                if (i > 5) {//导航展开功能
//                    i_nav_a[i].style.display = nav_show_hide;//导航展开功能
//                }
//            }
//            nav_show_hide == "none" ? nav_show_hide = "block" : nav_show_hide = "none";//导航展开功能
        i_nav_btn_totate == 0 ? i_nav_btn_totate = 180 : i_nav_btn_totate = 0;
        total_h = document.body.clientHeight;
    };
    nav_slide();
    i_nav_btn.addEventListener("touchend", function () {
        setTimeout(function () {
            nav_slide();
        }, 100);
    }, false);
    //banner
    $(".slBanr").find(".allIdx").html("/ " + $(".slBanr").find(".swiper-slide").length);
    var slBanr = new Swiper(".slBanr", {
        loop: true,
        autoplay: 5000,
        pagination: '.slBanr-pagination',
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    });

    //获取滚动条当前的位置
    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }

    //获取当前可是范围的高度
    function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
        return clientHeight;
    }

    //获取文档完整的高度
    function getScrollHeight() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    //
    window.onscroll = function () {
        if (getScrollTop() + getClientHeight() >= getScrollHeight()) {
            onajaxtest();
        }
    };
    var pageIndex = 1;

    function onajaxtest() {
        loadListMore(pageIndex);
        pageIndex = pageIndex + 1;

    }

};


function loadListMore(pageIndex) {
    if ($("#slLis").find('>li:last').text() != "正在加载") $("#slLis").append('<li class="default_loadtext"><div><p>正在加载</p></div></li>');
    if (pageIndex > 0) {
        addData(pageIndex);
    }
    dplus.track("下拉加载");
}

function lazyLoad() {
    $(function () {
        $("img.lazys").lazyload({
            "placeholder": "http://y2.ifengimg.com/a/2015/0728/d2414420f865effsize10_w346_h246.png",
            "effect": "fadeIn",
            "threshold": "1080"
        });
    });
}


/*addData*/
function addData(pageIndex) {
    $.ajax({
        url: 'mock/index.json',
        type: 'get',
        data: {p: pageIndex},
        dataType: 'json',
//            jsonp:'callback',
//            jsonpCallback:'funcallback',
        success: function (data) {
            var html = '';
            html = data.data;

            $('.default_loadtext').each(function(){
                $(this).remove()
            });

            /*geturl*/
            var url = "http://comment.ifeng.com/get.php?job=4&format=js&callback=ifengCmtCallBack&var=pl_all&docUrl=";
            var docUrlArr = [];
            $(html).each(function (){
                var comment = $(this);
                var dataUrl = comment.attr("data-url");
                docUrlArr.push(dataUrl);
            });

            var dataUrl = docUrlArr.join("|");
            var docUrl = url + dataUrl;
            $.ajax({
                url: docUrl,
                type: 'get',
                data: {},
                dataType: 'jsonp',
                jsonp:'callback',
                jsonpCallback:'ifengCmtCallBack',
                success: function (data) {
                    var str = '';
                    $(html).each(function (i) {
                        var join_count = data[i].join_count;
                        var commentHtml = '';
                        var litHref = $(this).children('a').attr('href');
                        if (join_count > 10000) {
                            var count = join_count / 10000;
                            join_count = count.toFixed(1) + "万";
                        }
                        if (join_count == 0) {
                            commentHtml = '<a href="'+ litHref +'" class="comment" style="display: none;"><span class="" >' + join_count + '</span><span></span></a>'
                        } else {
                            commentHtml = '<a href="'+ litHref +'" class="comment" style="display: block;"><span class="" >' + join_count + '</span><span></span></a>'
                        }

                        $(this).children('div').children('div').append(commentHtml);
                        str += '<li>' + $(this).html() + '</li>';
                    });
                    $('#slLis').append(str);
                    lazyLoad();
                }
            });
        }
    })
}
/*comment*/
function getComment() {
    lazyLoad();
    $.ajax({
        url: getCommentCount(),
        type: 'get',
        data: {},
        dataType: 'jsonp',
        jsonp:'callback',
        jsonpCallback:'ifengCmtCallBack',
        success: function (data) {
            var commentHtml = '';
            for (var i = 0; i < data.length; i++) {
                var join_count = data[i].join_count;

                if (join_count > 10000) {
                    var count = join_count / 10000;
                    join_count = count.toFixed(1) + "万";
                }

                var litHref = $(this).parent('.clearfix').text();

                if (join_count == 0) {
                    commentHtml = '<a href="#" class="comment" style="display: none;"><span class="" >' + join_count + '</span><span></span></a>'
                } else {
                    commentHtml = '<a href="#" class="comment" style="display: block;"><span class="" >' + join_count + '</span><span></span></a>'
                }
                $('#slLis li>div>div').eq(i).append(commentHtml);
            }

            $('.comment').each(function(){
                var litHref = $(this).parent('.clearfix').parent('div').siblings('a').attr('href');
                if(litHref == undefined || litHref == null || litHref == ''){return true}
                $(this).attr('href',litHref);
            })

        }
    })
}
getComment();
function getCommentCount() {
    var url = "http://comment.ifeng.com/get.php?job=4&format=js&callback=ifengCmtCallBack&var=pl_all&docUrl=";
    var docUrlArr = [];
    $("#slLis .slList").each(function () {
        var comment = $(this);
        var dataUrl = comment.attr("data-url");
        docUrlArr.push(dataUrl);
    });
    var dataUrl = docUrlArr.join("|");
    return url + dataUrl;
}