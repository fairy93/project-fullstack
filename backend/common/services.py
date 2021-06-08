class CCtvServices(object):
    @staticmethod
    def print_this(this):
        print('*' * 100)
        print(f'1. cctv의 type\n {type(this)}')
        print(f'2. cctv의 column\n {this.columns}')
        print(f'3. cctv의 상위 1개 행\n {this.head()}')
        print(f'4. cctvdml null 의 갯수\n {this.isnull().sum()}개')
