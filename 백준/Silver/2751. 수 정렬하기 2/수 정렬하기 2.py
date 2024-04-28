a = int(input())
nlist = []

for i in range(a):
    num = int(input())
    nlist.append(num)

nlist.sort()
for num in nlist:
    print(num)