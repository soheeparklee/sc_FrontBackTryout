class Me:
    def introduce_myself(self, name, age, job):
        self.name= name
        self.age= age
        self.job= job

sohee = Me("So Hee", 28, "programmer")

print("저의 이름은", sohee.name, "입니다.")
print("저는" sohee.age"살 입니다.")

class Me:
    def introduce_myself(self, name, age, job):
        self.name= name
        self.age= age
        self.job= job

    def introduce_print(self):
        print(f"저의 이름은{self.name}입니다")
        print(f"저는{self.age}살 입니다. ")

sohee = Me("So Hee", 28)
sohee.introduce_print()

