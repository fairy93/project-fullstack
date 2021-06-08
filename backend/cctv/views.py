from cctv.models import CCtvDto
from cctv.service import CCtvService


class CCtvApi(object):

    @staticmethod
    def main():
        util = CCtvService()
        cDto = CCtvDto()
        while 1:
            menu = input('실행')
            if menu == '1':
                cDto.dframe = util.new_model('pop_in_seoul')
                util.print_this(cDto.dframe)
            elif menu == '2':
                break
            else:
                cDto.dframe = util.new_model_csv('cctv_in_seoul')
                util.print_this(cDto.dframe)


CCtvApi.main()
