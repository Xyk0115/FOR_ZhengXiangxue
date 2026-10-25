
from flask import Flask, render_template

app = Flask(__name__)

# 准备给香雪的专属数据
@app.route('/')
def index():
    # 回忆相册数据
    memories = [
        {"id": 1, "img": "photo1.jpg", "title": "把属于你的光", "desc": "留在这一刻"},
        {"id": 2, "img": "photo2.jpg", "title": "听海", "desc": "也听自己的心"},
        {"id": 3, "img": "photo3.jpg", "title": "平凡的夜晚", "desc": "也闪闪发光"},
    ]
    # 信件内容
    letter = {
        "name": "香雪姐姐：",
        "content": "首先祝你生日快乐!恭喜你已经正式成年啦。"
                   "写这个网站的时候是我们在一起的第1557天。"
                   "时间好快，不知不觉中我们就已经度过了初三以及异校的高中三年。"
                   "现在我们都大学了，虽然你在永州，我在娄底。我们相距200多km,也算是我们在一起之后相距最远的一次。"
                   "不过呢我相信我们之间是不会有距离鸿沟的。"
                   "那最后呢，就祝愿我们香雪姐姐天天开心，不染世尘病痛，学业有成。"
                   "当然啦也祝愿我们越来越长久，我可还想和你一起度过只属于我们的每一个日日夜夜!"
    }
    return render_template('index.html', memories=memories, letter=letter)

if __name__ == '__main__':
    # 运行后访问 http://127.0.0.1:5000
    app.run(debug=True)