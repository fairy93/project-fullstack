from models import CCtvDto
import pandas as pd
import xlwings as xw
from common.services import CCtvServices


class CCtvService(CCtvServices):
    dto = CCtvDto()

    # cctvS = CCtvServices()

    def new_model(self, payload):
        this = self.dto
        this.context = './data/'
        this.fname = payload
        df = pd.read_excel(this.context + payload + '.xls')
        # sheet = xw.Book(this.context + payload + '.xls')
        # df = sheet.options(pd.DataFrame, index=False, header=True).value
        return df

    def new_model_csv(self, payload):
        this = self.dto
        this.context = './data/'
        this.fname = payload
        df = pd.read_csv(this.context + payload + '.csv')
        return df
