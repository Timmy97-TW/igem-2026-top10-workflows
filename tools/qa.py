import re,sys,glob,os
SIMP=set("这个们国实验产业发设计结构术师动过关应说对数据测试现场样线变质组织药够标签压载还难题复杂间问图级类电脑网络软开营养机构气连续输选择优价约纪录项长统论证际时书员确认为与济丰农环释辅检验识别记忆储传递执标准确实验证转换")
def check(p):
    s=open(p,encoding="utf-8").read()
    out=[]
    if "=>" in s: out.append("arrow function")
    bad=sorted(set(ch for ch in s if ch in SIMP))
    if bad: out.append("simplified: "+"".join(bad))
    # bilingual completeness: count en: vs zh:
    en=len(re.findall(r"\ben:\s*['\"]",s)); zh=len(re.findall(r"\bzh:\s*['\"]",s))
    if en!=zh: out.append("en/zh mismatch %d/%d"%(en,zh))
    # section ids present
    ids=re.findall(r"id: '([a-z]+-[a-z]+)'",s)
    toc=re.findall(r"\{ id: '([a-z-]+)', t:",s)
    missing=[i for i in toc if i not in ids]
    if missing: out.append("toc ids with no section: "+",".join(missing))
    return out
bad=0
for p in sorted(glob.glob("data/*.js")):
    r=check(p)
    print(("FAIL " if r else "ok   ")+p+("  -> "+"; ".join(r) if r else ""))
    bad+=bool(r)
print("files with issues:",bad)
