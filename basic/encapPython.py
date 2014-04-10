class A(object):

    def __init__(self):
      self.public = 10
      self.__private = 20

    def get_private(self):
        return self.__private

# outside:

a = A() # instance of A

print(a.public) # OK, 30
print(a.get_private()) # OK, 20
#print(a.__private) # fail, available only within A description

# but Python just renames such properties to
# _ClassName__property_name
# and by this name theses properties are 
# available outside
print(a._A__private) # OK, 20
