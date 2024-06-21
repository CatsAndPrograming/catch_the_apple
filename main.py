import os

lst = os.listdir('img')
new_list = []

for i in lst:
    new_list.append('./img/'+i)

print(new_list)