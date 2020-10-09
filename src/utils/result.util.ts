import { Result } from './result';
import Util from './util'




export class ResultUtil {
  public static success(object: any): Result {

    object = Util.removeEmptyField(object)

    const result: Result = new Result();
    result.code = 0;
    result.msg = 'success';

    result.data = Util.toCamel(object);
    return result;
  }


  public static error(code: number, msg: string): Result {
    const result: Result = new Result();
    result.code = code;
    result.msg = msg;
    return result;
  }
}