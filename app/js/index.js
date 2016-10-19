

//���ж��ռ���
var arrCity = new Array(
    ['010', '������', 'beijing', 'bj', '110000'],
    ['021', '�Ϻ���', 'shanghai', 'sh', '310000'],
    ['022', '�����', 'tianjin', 'tj', '120000'],
    ['020', '������', 'guangzhou', 'gd_gz', '440100'],
    ['0755', '������', 'shenzhen', 'gd_sz', '440300'],
    ['023', '������', 'chongqing', 'cq', '500000'],
    ['0311', '�ӱ�ʡ', 'hebei', 'hb', '130000'],
    ['0351', 'ɽ��ʡ', 'shanxi', 'sx', '140000'],
    ['0471', '���ɹ�������', 'neimenggu', 'nmg', '150000'],
    ['024', '����ʡ', 'liaoning', 'ln', '210000'],
    ['0431', '����ʡ', 'jilin', 'jl', '220000'],
    ['0451', '������ʡ', 'heilongjiang', 'hlj', '230000'],
    ['025', '����ʡ', 'jiangsu', 'js', '320000'],
    ['0571', '�㽭ʡ', 'zhejiang', 'zj', '330000'],
    ['0551', '����ʡ', 'anhui', 'ah', '340000'],
    ['0591', '����ʡ', 'fujian', 'fj', '350000'],
    ['0791', '����ʡ', 'jiangxi', 'jx', '360000'],
    ['0531', 'ɽ��ʡ', 'shandong', 'sd', '370000'],
    ['0371', '����ʡ', 'henan', 'hn', '410000'],
    ['027', '����ʡ', 'hubei', 'hb', '420000'],
    ['0731', '����ʡ', 'hunan', 'hn', '430000'],
    ['020', '�㶫ʡ', 'guangdong', 'gd', '440000'],
    ['0771', '����׳��������', 'guangxi', 'gx', '450000'],
    ['0898', '����ʡ', 'hainan', 'hn', '469000'],
    ['028', '�Ĵ�ʡ', 'sichuan', 'sc', '510000'],
    ['0851', '����ʡ', 'guizhou', 'gz', '520000'],
    ['0871', '����ʡ', 'yunnan', 'yn', '530000'],
    ['0891', '����������', 'xizang', 'xz', '540000'],
    ['029', '����ʡ', 'shanxi', 'sx', '610000'],
    ['0931', '����ʡ', 'gansu', 'gs', '620000'],
    ['0951', '���Ļ���������', 'ningxia', 'nx', '640000'],
    ['0971', '�ຣʡ', 'qinghai', 'qh', '630000'],
    ['0991', '�½�ά���������', 'xinjiang', 'xj', '650000'],
    ['0991', '�½�ֱϽ������λ', 'xinjiang', 'xj', '659000'],
    ['', '����', 'aomen', 'am', '820000'],
    ['', '���', 'xianggang', 'xg', '810000'],
    ['', '̨��ʡ', 'taiwan', 'tw', '710000'],
    ['0311', 'ʯ��ׯ��', 'shijiazhuang', 'hb_sjz', '130100'],
    ['0315', '��ɽ��', 'tangshan', 'hb_ts', '130200'],
    ['0335', '�ػʵ�', 'qinhuangdao', 'hb_qhd', '130300'],
    ['0310', '������', 'handan', 'hb_hd', '130400'],
    ['0319', '��̨��', 'xingtai', 'hb_xta', '130500'],
    ['0312', '������', 'baoding', 'hb_bd', '130600'],
    ['0313', '�żҿ�', 'zhangjiakou', 'hb_zjk', '130700'],
    ['0314', '�е���', 'chengde', 'hb_cd', '130800'],
    ['0317', '������', 'cangzhou', 'hb_cz', '130900'],
    ['0316', '�ȷ���', 'langfang', 'hb_lf', '131000'],
    ['0318', '��ˮ��', 'hengshui', 'hb_hs', '131100'],
    ['0351', '̫ԭ��', 'taiyuan', 'sx_ty', '140100'],
    ['0352', '��ͬ��', 'datong', 'sx_dt', '140200'],
    ['0353', '��Ȫ��', 'yangquan', 'sx_yq', '140300'],
    ['0355', '������', 'changzhi', 'sx_cz', '140400'],
    ['0356', '������', 'jincheng', 'sx_jc', '140500'],
    ['0349', '˷����', 'shuozhou', 'sx_sz', '140600'],
    ['0354', '������', 'jinzhong', 'sx_jz', '140700'],
    ['0359', '�˳���', 'yuncheng', 'sx_yc', '140800'],
    ['0350', '������', 'xinzhou', 'sx_xz', '140900'],
    ['0357', '�ٷ���', 'linfen', 'sx_lf', '141000'],
    ['0358', '������', 'lvliang', 'sx_ll', '141100'],
    ['0471', '���ͺ���', 'huhehaote', 'nmg_hhht', '150100'],
    ['0472', '��ͷ��', 'baotou', 'nmg_bt', '150200'],
    ['0473', '�ں���', 'wuhai', 'nmg_wh', '150300'],
    ['0476', '�����', 'chifeng', 'nmg_cf', '150400'],
    ['0475', 'ͨ����', 'tongliao', 'nmg_tl', '150500'],
    ['0477', '������˹��', 'eerduosi', 'nmg_eeds', '150600'],
    ['0470', '���ױ���', 'hulunbeier', 'nmg_hlbe', '150700'],
    ['0478', '�����׶���', 'bayannaoer', 'nmg_byze', '150800'],
    ['0474', '�����첼��', 'wulanchabu', 'nmg_wlcb', '150900'],
    ['0313', '�˰���', 'xinganmeng', 'nmg_xa', '152200'],
    ['0479', '���ֹ�����', 'xilinguole', 'nmg_xlgl', '152500'],
    ['0483', '��������', 'alashanmeng', 'nmg_alsm', '152900'],
    ['024', '������', 'shenyang', 'ln_sy', '210100'],
    ['0411', '������', 'dalian', 'ln_dl', '210200'],
    ['0412', '��ɽ��', 'anshan', 'ln_as', '210300'],
    ['0413', '��˳��', 'fushun', 'ln_fs', '210400'],
    ['0414', '��Ϫ��', 'benxi', 'ln_bx', '210500'],
    ['0415', '������', 'dandong', 'ln_dd', '210600'],
    ['0416', '������', 'jinzhou', 'ln_jz', '210700'],
    ['0417', 'Ӫ����', 'yingkou', 'ln_yk', '210800'],
    ['0418', '������', 'fuxin', 'ln_fx', '210900'],
    ['0419', '������', 'liaoyang', 'ln_ly', '211000'],
    ['0427', '�̽���', 'panjin', 'ln_pj', '211100'],
    ['0410', '������', 'tieling', 'ln_tl', '211200'],
    ['0421', '������', 'chaoyang', 'ln_cy', '211300'],
    ['0429', '��«����', 'huludao', 'ln_hld', '211400'],
    ['0431', '������', 'changchun', 'jl_cc', '220100'],
    ['0432', '������', 'jilin', 'jl_jl', '220200'],
    ['0434', '��ƽ��', 'siping', 'jl_sp', '220300'],
    ['0437', '��Դ��', 'liaoyuan', 'jl_ly', '220400'],
    ['0435', 'ͨ����', 'tonghua', 'jl_th', '220500'],
    ['0439', '��ɽ��', 'baishan', 'jl_bs', '220600'],
    ['0438', '��ԭ��', 'songyuan', 'jl_sy', '220700'],
    ['0436', '�׳���', 'baicheng', 'jl_bc', '220800'],
    ['0433', '�ӱ߳�����', 'yanbian', 'jl_yb', '222400'],
    ['0451', '��������', 'haerbin', 'hlj_heb', '230100'],
    ['0452', '���������', 'qiqihaer', 'hlj_qqhe', '230200'],
    ['0467', '������', 'jixi', 'hlj_jx', '230300'],
    ['0468', '�׸���', 'hegang', 'hlj_hg', '230400'],
    ['0469', '˫Ѽɽ��', 'shuangyashan', 'hlj_sys', '230500'],
    ['0459', '������', 'daqing', 'hlj_dq', '230600'],
    ['0458', '������', 'yichun', 'hlj_yc', '230700'],
    ['0454', '��ľ˹��', 'jiamusi', 'hlj_jms', '230800'],
    ['0464', '��̨����', 'qitaihe', 'hlj_qth', '230900'],
    ['0453', 'ĵ������', 'mudanjiang', 'hlj_mdj', '231000'],
    ['0456', '�ں���', 'heihe', 'hlj_hh', '231100'],
    ['0455', '�绯��', 'suihua', 'hlj_sh', '231200'],
    ['0457', '���˰���', 'daxinganling', 'hlj_dxal', '232700'],
    ['025', '�Ͼ���', 'nanjing', 'js_nj', '320100'],
    ['0510', '������', 'wuxi', 'js_wx', '320200'],
    ['0516', '������', 'xuzhou', 'js_xz', '320300'],
    ['0519', '������', 'changzhou', 'js_cz', '320400'],
    ['0512', '������', 'suzhou', 'js_sz', '320500'],
    ['0513', '��ͨ��', 'nantong', 'js_nt', '320600'],
    ['0518', '���Ƹ���', 'lianyungang', 'js_lyg', '320700'],
    ['0517', '������', 'huaian', 'js_ha', '320800'],
    ['0515', '�γ���', 'yancheng', 'js_yc', '320900'],
    ['0514', '������', 'yangzhou', 'js_yz', '321000'],
    ['0511', '����', 'zhenjiang', 'js_zj', '321100'],
    ['0523', '̩����', 'taizhou', 'js_tz', '321200'],
    ['0527', '��Ǩ��', 'suqian', 'js_sq', '321300'],
    ['0571', '������', 'hangzhou', 'zj_hz', '330100'],
    ['0574', '������', 'ningbo', 'zj_nb', '330200'],
    ['0577', '������', 'wenzhou', 'zj_wz', '330300'],
    ['0573', '������', 'jiaxing', 'zj_jx', '330400'],
    ['0572', '������', 'huzhou', 'zj_hzh', '330500'],
    ['0575', '������', 'shaoxing', 'zj_sx', '330600'],
    ['0579', '����', 'jinhua', 'zj_jh', '330700'],
    ['0570', '������', 'quzhou', 'zj_qz', '330800'],
    ['0580', '��ɽ��', 'zhoushan', 'zj_zs', '330900'],
    ['0576', '̨����', 'tzhou', 'zj_tz', '331000'],
    ['0578', '��ˮ��', 'lishui', 'zj_ls', '331100'],
    ['0551', '�Ϸ���', 'hefei', 'ah_hf', '340100'],
    ['0553', '�ߺ���', 'wuhu', 'ah_wh', '340200'],
    ['0552', '������', 'bengbu', 'ah_bb', '340300'],
    ['0554', '������', 'huainan', 'ah_hn', '340400'],
    ['0555', '��ɽ��', 'maanshan', 'ah_mas', '340500'],
    ['0561', '������', 'huaibei', 'ah_hb', '340600'],
    ['0562', 'ͭ����', 'tongling', 'ah_tl', '340700'],
    ['0556', '������', 'anqing', 'ah_aq', '340800'],
    ['0559', '��ɽ��', 'huangshan', 'ah_hs', '341000'],
    ['0550', '������', 'chuzhou', 'ah_cz', '341100'],
    ['0558', '������', 'fuyang', 'ah_fy', '341200'],
    ['0557', '������', 'suzhou', 'ah_sz', '341300'],
    ['0565', '������', 'chaohu', 'ah_ch', '340181'],
    ['0564', '������', 'liuan', 'ah_la', '341500'],
    ['0558', '������', 'bozhou', 'ah_bz', '341600'],
    ['0566', '������', 'chizhou', 'ah_cz', '341700'],
    ['0563', '������', 'xuancheng', 'ah_xc', '341800'],
    ['0591', '������', 'fuzhou', 'fj_fz', '350100'],
    ['0592', '������', 'xiamen', 'fj_xm', '350200'],
    ['0594', '������', 'putian', 'fj_pt', '350300'],
    ['0598', '������', 'sanming', 'fj_sm', '350400'],
    ['0595', 'Ȫ����', 'quanzhou', 'fj_qz', '350500'],
    ['0596', '������', 'zhangzhou', 'fj_zz', '350600'],
    ['0599', '��ƽ��', 'nanping', 'fj_np', '350700'],
    ['0597', '������', 'longyan', 'fj_ly', '350800'],
    ['0593', '������', 'ningde', 'fj_nd', '350900'],
    ['0313', '�ϲ���', 'nanchang', 'jx_nc', '360100'],
    ['0798', '��������', 'jingdezhen', 'jx_jdz', '360200'],
    ['0799', 'Ƽ����', 'pingxiang', 'jx_px', '360300'],
    ['0792', '�Ž���', 'jiujiang', 'jx_jj', '360400'],
    ['0790', '������', 'xinyu', 'jx_xy', '360500'],
    ['0701', 'ӥ̶��', 'yingtan', 'jx_yt', '360600'],
    ['0797', '������', 'ganzhou', 'jx_gz', '360700'],
    ['0796', '������', 'jian', 'jx_ja', '360800'],
    ['0795', '�˴���', 'yi_chun', 'jx_yc', '360900'],
    ['0794', '������', 'fu_zhou', 'jx_fz', '361000'],
    ['0793', '������', 'shangrao', 'jx_sr', '361100'],
    ['0531', '������', 'jinan', 'sd_jn', '370100'],
    ['0532', '�ൺ��', 'qingdao', 'sd_qd', '370200'],
    ['0533', '�Ͳ���', 'zibo', 'sd_zb', '370300'],
    ['0632', '��ׯ��', 'zaozhuang', 'sd_zz', '370400'],
    ['0546', '��Ӫ��', 'dongying', 'sd_dy', '370500'],
    ['0535', '��̨��', 'yantai', 'sd_yt', '370600'],
    ['0536', 'Ϋ����', 'weifang', 'sd_wf', '370700'],
    ['0537', '������', 'jining', 'sd_jni', '370800'],
    ['0538', '̩����', 'taian', 'sd_ta', '370900'],
    ['0631', '������', 'weihai', 'sd_wh', '371000'],
    ['0633', '������', 'rizhao', 'sd_rz', '371100'],
    ['0634', '������', 'laiwu', 'sd_lw', '371200'],
    ['0539', '������', 'linyi', 'sd_ly', '371300'],
    ['0534', '������', 'dezhou', 'sd_dz', '371400'],
    ['0635', '�ĳ���', 'liaocheng', 'sd_lc', '371500'],
    ['0543', '������', 'binzhou', 'sd_bz', '371600'],
    ['0530', '������', 'heze', 'sd_hz', '371700'],
    ['0371', '֣����', 'zhengzhou', 'hn_zzh', '410100'],
    ['0378', '������', 'kaifeng', 'hn_kf', '410200'],
    ['0379', '������', 'luoyang', 'hn_ly', '410300'],
    ['0375', 'ƽ��ɽ��', 'pingdingshan', 'hn_pts', '410400'],
    ['0372', '������', 'anyang', 'hn_ay', '410500'],
    ['0392', '�ױ���', 'hebi', 'hn_hb', '410600'],
    ['0373', '������', 'xinxiang', 'hn_xx', '410700'],
    ['0391', '������', 'jiaozuo', 'hn_jz', '410800'],
    ['0393', '�����', 'puyang', 'hn_py', '410900'],
    ['0374', '�����', 'xuchang', 'hn_xc', '411000'],
    ['0395', '�����', 'luohe', 'hn_lh', '411100'],
    ['0398', '����Ͽ��', 'sanmenxia', 'hn_smx', '411200'],
    ['0377', '������', 'nanyang', 'hn_ny', '411300'],
    ['0370', '������', 'shangqiu', 'hn_sq', '411400'],
    ['0376', '������', 'xinyang', 'hn_xy', '411500'],
    ['0394', '�ܿ���', 'zhoukou', 'hn_zk', '411600'],
    ['0396', 'פ�����', 'zhumadian', 'hn_zmd', '411700'],
    ['0391', '��Դ��', 'jiyuan', 'hn_jy', '419001'],
    ['027', '�人��', 'wuhan', 'hb_wh', '420100'],
    ['0714', '��ʯ��', 'huangshi', 'hb_hs', '420200'],
    ['0719', 'ʮ����', 'shiyan', 'hb_sy', '420300'],
    ['0717', '�˲���', 'yichang', 'hb_yc', '420500'],
    ['0710', '�差��', 'xiangyang', 'hb_xf', '420600'],
    ['0711', '������', 'ezhou', 'hb_ez', '420700'],
    ['0724', '������', 'jingmen', 'hb_jm', '420800'],
    ['0712', 'Т����', 'xiaogan', 'hb_xg', '420900'],
    ['0716', '������', 'jingzhou', 'hb_jz', '421000'],
    ['0713', '�Ƹ���', 'huanggang', 'hb_hg', '421100'],
    ['0715', '������', 'xianning', 'hb_xn', '421200'],
    ['0722', '������', 'suizhou', 'hb_sz', '421300'],
    ['0718', '��ʩ��', 'enshi', 'hb_es', '422800'],
    ['0728', '������', 'xiantao', 'hb_xt', '429004'],
    ['0728', 'Ǳ����', 'qianjiang', 'hb_qj', '429005'],
    ['0728', '������', 'tianmen', 'hb_tm', '429006'],
    ['0719', '��ũ������', 'shennongjia', 'hb_snj', '429021'],
    ['0731', '��ɳ��', 'changsha', 'hn_cs', '430100'],
    ['0731', '������', 'zhuzhou', 'hn_zz', '430200'],
    ['0731', '��̶��', 'xiangtan', 'hn_xt', '430300'],
    ['0734', '������', 'hengyang', 'hn_hy', '430400'],
    ['0739', '������', 'shaoyang', 'hn_sya', '430500'],
    ['0730', '������', 'yueyang', 'hn_yy', '430600'],
    ['0736', '������', 'changde', 'hn_cd', '430700'],
    ['0744', '�żҽ���', 'zhangjiajie', 'hn_zjj', '430800'],
    ['0737', '������', 'yiyang', 'hn_yy', '430900'],
    ['0735', '������', 'chenzhou', 'hn_cz', '431000'],
    ['0746', '������', 'yongzhou', 'hn_yz', '431100'],
    ['0745', '������', 'huaihua', 'hn_hh', '431200'],
    ['0738', '¦����', 'loudi', 'hn_ldi', '431300'],
    ['0743', '��������������', 'xiangxi', 'hn_xx', '433100'],
    ['0751', '�ع���', 'shaoguan', 'gd_sg', '440200'],
    ['0756', '�麣��', 'zhuhai', 'gd_zh', '440400'],
    ['0754', '��ͷ��', 'shantou', 'gd_st', '440500'],
    ['0757', '��ɽ��', 'foshan', 'gd_fs', '440600'],
    ['0750', '������', 'jiangmen', 'gd_jm', '440700'],
    ['0759', 'տ����', 'zhanjiang', 'gd_zj', '440800'],
    ['0668', 'ï����', 'maoming', 'gd_mm', '440900'],
    ['0758', '������', 'zhaoqing', 'gd_zq', '441200'],
    ['0752', '������', 'huizhou', 'gd_hz', '441300'],
    ['0753', '÷����', 'meizhou', 'gd_mz', '441400'],
    ['0660', '��β��', 'shanwei', 'gd_sw', '441500'],
    ['0762', '��Դ��', 'heyuan', 'gd_hy', '441600'],
    ['0662', '������', 'yangjiang', 'gd_yj', '441700'],
    ['0763', '��Զ��', 'qingyuan', 'gd_qy', '441800'],
    ['0769', '��ݸ��', 'dongguan', 'gd_d', '441900'],
    ['0760', '��ɽ��', 'zhongshan', 'gd_zs', '442000'],
    ['0768', '������', 'chaozhou', 'gd_sz', '445100'],
    ['0663', '������', 'jieyang', 'gd_jy', '445200'],
    ['0766', '�Ƹ���', 'yunfu', 'gd_yf', '445300'],
    ['0771', '������', 'nanning', 'gx_nn', '450100'],
    ['0772', '������', 'liuzhou', 'gx_lz', '450200'],
    ['0773', '������', 'guilin', 'gx_gl', '450300'],
    ['0774', '������', 'wuzhou', 'gx_wz', '450400'],
    ['0779', '������', 'beihai', 'gx_bh', '450500'],
    ['0770', '���Ǹ���', 'fangchenggang', 'gx_fcg', '450600'],
    ['0777', '������', 'qinzhou', 'gx_qz', '450700'],
    ['0775', '�����', 'guigang', 'gx_gg', '450800'],
    ['0775', '������', 'ylin', 'gx_yl', '450900'],
    ['0776', '��ɫ��', 'baise', 'gx_bs', '451000'],
    ['0774', '������', 'hezhou', 'gx_hz', '451100'],
    ['0778', '�ӳ���', 'hechi', 'gx_hc', '451200'],
    ['0772', '������', 'laibin', 'gx_lb', '451300'],
    ['0771', '������', 'chongzuo', 'gx_cz', '451400'],
    ['0898', '������', 'haikou', 'hn_hk', '460100'],
    ['0898', '������', 'sanya', 'hn_sy', '460200'],
    ['028', '�ɶ���', 'chengdu', 'sc_cd', '510100'],
    ['0813', '�Թ���', 'zigong', 'sc_zg', '510300'],
    ['0812', '��֦����', 'panzhihua', 'sc_pzh', '510400'],
    ['0830', '������', 'luzhou', 'sc_lz', '510500'],
    ['0838', '������', 'deyang', 'sc_dy', '510600'],
    ['0816', '������', 'mianyang', 'sc_my', '510700'],
    ['0839', '��Ԫ��', 'guangyuan', 'sc_gy', '510800'],
    ['0825', '������', 'suining', 'sc_sn', '510900'],
    ['0832', '�ڽ���', 'neijiang', 'sc_nj', '511000'],
    ['0833', '��ɽ��', 'leshan', 'sc_ls', '511100'],
    ['0817', '�ϳ���', 'nanchong', 'sc_nc', '511300'],
    ['028', 'üɽ��', 'meishan', 'sc_ms', '511400'],
    ['0831', '�˱���', 'yibin', 'sc_yb', '511500'],
    ['0826', '�㰲��', 'guangan', 'sc_ga', '511600'],
    ['0818', '������', 'dazhou', 'sc_dz', '511700'],
    ['0835', '�Ű���', 'yaan', 'sc_ya', '511800'],
    ['0827', '������', 'bazhong', 'sc_bz', '511900'],
    ['028', '������', 'ziyang', 'sc_zy', '512000'],
    ['0837', '���Ӳ���', 'aba', 'sc_ab', '513200'],
    ['0836', '���β���', 'ganzi', 'sc_gz', '513300'],
    ['0834', '��ɽ����', 'liangshan', 'sc_ls', '513400'],
    ['0851', '������', 'guiyang', 'gz_gy', '520100'],
    ['0858', '����ˮ��', 'liupanshui', 'gz_lps', '520200'],
    ['0852', '������', 'zunyi', 'gz_zy', '520300'],
    ['0853', '��˳��', 'anshun', 'gz_as', '520400'],
    ['0856', 'ͭ��', 'tongren', 'gz_tr', '522200'],
    ['0859', 'ǭ���ϲ���������', 'qianxinan', 'gz_qxn', '522300'],
    ['0857', '�Ͻ���', 'bijiequ', 'gz_bj', '522400'],
    ['0855', 'ǭ�������嶱��', 'qiandongnan', 'gz_qdn', '522600'],
    ['0854', 'ǭ�ϲ���������', 'qiannan', 'gz_qn', '522700'],
    ['0871', '������', 'kunming', 'yn_km', '530100'],
    ['0874', '������', 'qujing', 'yn_qj', '530300'],
    ['0877', '��Ϫ��', 'yuxi', 'yn_yx', '530400'],
    ['0875', '��ɽ��', 'baoshan', 'yn_bs', '530500'],
    ['0870', '��ͨ��', 'zhaotong', 'yn_zt', '530600'],
    ['0888', '������', 'lijiang', 'yn_lj', '530700'],
    ['0879', '˼é��', 'puer', 'yn_pe', '530800'],
    ['0883', '�ٲ���', 'lincang', 'yn_lc', '530900'],
    ['0878', '��������', 'chuxiong', 'yn_cx', '532300'],
    ['0873', '��ӹ���������', 'honghe', 'yn_hh', '532500'],
    ['0876', '��ɽ׳������', 'wenshan', 'yn_ws', '532600'],
    ['0691', '��˫���ɴ���', 'xishuangbanna', 'yn_xsbn', '532800'],
    ['0872', '�������', 'dali', 'yn_dl', '532900'],
    ['0692', '�º���徰����', 'dehong', 'yn_dh', '533100'],
    ['0886', 'ŭ��������', 'nujiang', 'yn_nj', '533300'],
    ['0887', '�������', 'diqing', 'yn_dq', '533400'],
    ['0891', '������', 'lasa', 'xz_ls', '540100'],
    ['0895', '����', 'changdu', 'xz_cd', '542100'],
    ['0893', 'ɽ��', 'shannan', 'xz_sn', '542200'],
    ['0892', '�տ���', 'rikeze', 'xz_rkz', '542300'],
    ['0896', '��������', 'naqu', 'xz_nq', '542400'],
    ['0897', '�������', 'ali', 'xz_al', '542500'],
    ['0894', '��֥����', 'linzhi', 'xz_lz', '542600'],
    ['029', '������', 'xian', 'sx_xa', '610100'],
    ['0919', 'ͭ����', 'tongchuan', 'sx_tc', '610200'],
    ['0917', '������', 'baoji', 'sx_bj', '610300'],
    ['029', '������', 'xianyang', 'sx_xy', '610400'],
    ['0913', 'μ����', 'weinan', 'sx_wn', '610500'],
    ['0911', '�Ӱ���', 'yanan', 'sx_ya', '610600'],
    ['0916', '������', 'hanzhong', 'sx_hz', '610700'],
    ['0912', '������', 'yulin', 'sx_yl', '610800'],
    ['0915', '������', 'ankang', 'sx_ak', '610900'],
    ['0914', '������', 'shangluo', 'sx_sl', '611000'],
    ['0931', '������', 'lanzhou', 'gs_lz', '620100'],
    ['0937', '��������', 'jiayuguan', 'gs_jyg', '620200'],
    ['0935', '�����', 'jinchang', 'gs_jc', '620300'],
    ['0943', '������', 'baiyin', 'gs_by', '620400'],
    ['0938', '��ˮ��', 'tianshui', 'gs_ts', '620500'],
    ['0935', '������', 'wuwei', 'gs_ww', '620600'],
    ['0936', '��Ҵ��', 'zhangye', 'gs_zy', '620700'],
    ['0933', 'ƽ����', 'pingliang', 'gs_pl', '620800'],
    ['0937', '��Ȫ��', 'jiuquan', 'gs_jq', '620900'],
    ['0934', '������', 'qingyang', 'gs_qy', '621000'],
    ['0932', '������', 'dingxi', 'gs_dx', '621100'],
    ['0939', '¤����', 'longnan', 'gs_ln', '621200'],
    ['0930', '���Ļ���', 'linxia', 'gs_lx', '622900'],
    ['0941', '���ϲ���', 'gannan', 'gs_gn', '623000'],
    ['0971', '������', 'xining', 'qh_xn', '630100'],
    ['0972', '����', 'haidong', 'qh_hd', '632100'],
    ['0970', '��������', 'haibei', 'qh_hb', '632200'],
    ['0973', '���ϲ���', 'huangnan', 'qh_hn', '632300'],
    ['0974', '���ϲ���', 'hainan', 'qh_hn', '632500'],
    ['0975', '�������', 'guoluo', 'qh_gl', '632600'],
    ['0976', '��������', 'yushu', 'qh_ys', '632700'],
    ['0979', '�����ɹ������', 'haixi', 'qh_hx', '632800'],
    ['0951', '������', 'yinchuan', 'nx_yc', '640100'],
    ['0952', 'ʯ��ɽ��', 'shizuishan', 'nx_szs', '640200'],
    ['0953', '������', 'wuzhong', 'nx_wz', '640300'],
    ['0954', '��ԭ��', 'guyuan', 'nx_gy', '640400'],
    ['0955', '������', 'zhongwei', 'nx_zw', '640500'],
    ['0991', '��³ľ����', 'wulumuqi', 'xj_wlmq', '650100'],
    ['0990', '����������', 'kelamayi', 'xj_klmy', '650200'],
    ['0995', '��³������', 'tulufan', 'xj_tlf', '652101'],
    ['0902', '���ܵ���', 'hami', 'xj_hm', '652200'],
    ['0994', '��������', 'changji', 'xj_cj', '652300'],
    ['0909', '��������', 'boertala', 'xj_betl', '652700'],
    ['0996', '��������', 'bayinguoleng', 'xj_bygl', '652800'],
    ['0997', '�����յ���', 'akesu', 'xj_aks', '652900'],
    ['0908', '�������տ¶�����', 'kezilesukeerkezi', 'xj_kzlskekz', '653000'],
    ['0998', '��ʲ����', 'kashi', 'xj_ks', '653100'],
    ['0903', '�������', 'hetian', 'xj_ht', '653200'],
    ['0999', '���������', 'yilihasake', 'xj_ylhsk', '654000'],
    ['0901', '���ǵ���', 'tacheng', 'xj_tc', '654200'],
    ['0906', '����̩����', 'aletai', 'xj_alt', '654300'],
    ['0993', 'ʯ������', 'shihezi', 'xj_shz', '659001'],
    ['0998', 'ͼľ�����', 'tumushuke', 'xj_tmsk', '659003'],
    ['0512', '��ɽ��', 'kunshan', 'js_ks', '320583'],
    ['0433', '�Ӽ���', 'yanji', 'jl_yj', '220900']);

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
                        throw new error('IP��ʽ����ȷ');
                    } else if (parseInt(jsond[0].code) == -2) {
                        ifengcookie = "CN110000";
                        throw new error('IPδ�������κ�����');
                    } else if (parseInt(jsond[0].code) == -3) {
                        ifengcookie = "CN110000";
                        throw new error('IPδ�������κι���');
                    } else if (parseInt(jsond[0].code) == -4) {
                        ifengcookie = "CN110000";
                        throw new error('IPδ��������������');
                    } else if (parseInt(jsond[0].code) == -5) {
                        ifengcookie = "CN110000";
                        throw new error('���ݿ����δ��������س���');
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
            $("#loc_position").html('<span></span><p>'+arrCity[i][1].replace('��','')+'</p>');
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
//                nav_show_hide = "none",//����չ������
        i_nav_btn_totate = 0;
    function nav_slide() {
        i_nav_btn.style.transform = "rotate(" + i_nav_btn_totate + "deg)";
//            for (var i = 0, len = i_nav_a.length - 1; i < len; i++) {//����չ������
//                if (i > 5) {//����չ������
//                    i_nav_a[i].style.display = nav_show_hide;//����չ������
//                }
//            }
//            nav_show_hide == "none" ? nav_show_hide = "block" : nav_show_hide = "none";//����չ������
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

    //��ȡ��������ǰ��λ��
    function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    }

    //��ȡ��ǰ���Ƿ�Χ�ĸ߶�
    function getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
        return clientHeight;
    }

    //��ȡ�ĵ������ĸ߶�
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
    if ($("#slLis").find('>li:last').text() != "���ڼ���") $("#slLis").append('<li class="default_loadtext"><div><p>���ڼ���</p></div></li>');
    if (pageIndex > 0) {
        addData(pageIndex);
    }
    dplus.track("��������");
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
                            join_count = count.toFixed(1) + "��";
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
                    join_count = count.toFixed(1) + "��";
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