获取所有用户信息
http://localhost:3000/users

获取id为1的用户信息
http://localhost:3000/users/1

获取所有公司信息
http://localhost:3000/companies

获取conpanyId为1的公司信息
http://localhost:3000/companies/1

获取conpanyId为3的用户信息
http://localhost:3000/companies/3/users

获取name为Apple的公司信息
http://localhost:3000/companies?name=Apple

获取一页只有两条数据的公司信息
http://localhost:3000/companies?_page=1&_limit=2

根据公司名升序排序（desc为降序）
http://localhost:3000/companies?_sort=name&_order=asc

获取年龄为30和30以上的用户信息
http://localhost:3000/users?age_gte=30

按年龄范围获取
http://localhost:3000/users?age_gte=30&age_lte=34


搜索用户信息
http://localhost:3000/users?q=q

