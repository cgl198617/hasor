/*
 * Copyright 2008-2009 the original 赵永春(zyc@hasor.net).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package net.hasor.core.context.factorys.guice;
import net.hasor.core.Provider;
import net.hasor.core.RegisterInfo;
import net.hasor.core.context.factorys.AbstractRegisterInfoAdapter;
/**
 * 
 * @version : 2014年7月4日
 * @author 赵永春(zyc@hasor.net)
 */
public class GuiceRegisterInfoAdapter<T> extends AbstractRegisterInfoAdapter<T> {
    public void setInitParam(int index, Class<?> paramType, Provider<?> valueProvider) {
        // TODO Auto-generated method stub
    }
    public void setInitParam(int index, Class<?> paramType, RegisterInfo<?> valueInfo) {
        // TODO Auto-generated method stub
    }
    public void addInject(String property, Provider<?> valueProvider) {
        // TODO Auto-generated method stub
    }
    public void addInject(String property, RegisterInfo<?> valueInfo) {
        // TODO Auto-generated method stub
    }
}