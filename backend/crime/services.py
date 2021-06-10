from common.models import FileDTO
from common.services import Printer, Reader
from common.abstracts import ReaderBase


class CrimeService(ReaderBase):

    def csv(self, payload):
        printer = Printer()
        reader = Reader()
        file = FileDTO()
        file.context = payload.get('context')
        file.fname = payload.get('fname')
        printer.dframe(reader.csv(file))

    def xls(self, payload):
        printer = Printer()
        reader = Reader()
        file = FileDTO()
        file.context = payload.get('context')
        file.fname = payload.get('fname')
        printer.dframe(reader.xls(file, 3, [0,1,2,3,4,5,6,7,8,9,10,11,12]))

    def json(self):
        pass

    def new_file(self):
        pass

    # cntkdzmffotmdp wjdmdlehlwl dksgdms cnrk apthem
    def test(self):
        pass
