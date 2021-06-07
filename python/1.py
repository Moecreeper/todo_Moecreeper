def main():
    asw={"let" : 0,"spa" : 0,"num" : 0,"etc" : 0}
    a = input("输入字符串:")
    for s in a:
        if(s >= 'a' and s<='z' or s >= 'A' and s<='Z'):
            asw["let"] += 1
        elif(s == ' '):
            asw["spa"] += 1
        elif(s >= '0' and s <= '9'):
            asw["num"] += 1
        else:
            asw["etc"] += 1
    print("  字母数：" , asw["let"])
    print("-我 - 是 - 分 - 割 - 线- ")
    print("  空格数：" , asw["spa"])
    print("-我 - 是 - 分 - 割 - 线- ")
    print("  数字数：" , asw["num"])
    print("-我 - 是 - 分 - 割 - 线- ")
    print("  其余数：" , asw["etc"])


main()
