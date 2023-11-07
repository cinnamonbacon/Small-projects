def insertelf(elf,arr):
    for i in range(3):
        if(elf<arr[i]):
            break
        elif(elf<arr[i]):
            arr[i-1]=elf
        else:
            if(i!=0):
                arr[i-1]=arr[i]
            arr[i]=elf
        
    return arr

file = open("advent-of-code-2022-day1.txt", "r")

text=file.readlines()
#lines = text.split("\n")
temp=0
total=0
elves=[0,0,0]
for x in text:
    if(x=="\n"):
        elves=insertelf(temp,elves)
        print(elves)
        temp=0
    else:
        temp+=int(x)
print(elves)
print(elves[0]+elves[1]+elves[2])
file.close



