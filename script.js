 <script>
        // 苏轼生平数据
        const timelineData = [
            {
                year: "1037年",
                title: "苏轼出生",
                description: "苏轼出生于四川眉山一个书香门第，父亲苏洵是著名文学家，母亲程氏也出身名门。",
                poem: "我家江水初发源，宦游直送江入海。"
            },
            {
                year: "1056年",
                title: "父子三人赴京应试",
                description: "苏轼与父亲苏洵、弟弟苏辙一同赴京参加科举考试，轰动一时。",
                poem: "父子三人同赴举，一时声价动京师。"
            },
            {
                year: "1057年",
                title: "进士及第",
                description: "苏轼考中进士，主考官欧阳修对其文章大为赞赏，预言他将是未来文坛领袖。",
                poem: "文章千古事，得失寸心知。"
            },
            {
                year: "1061年",
                title: "凤翔签判",
                description: "苏轼被任命为凤翔府签判，开始仕途生涯，期间写下《喜雨亭记》等名篇。",
                poem: "雨过潮平江海碧，电光时掣紫金蛇。"
            },
            {
                year: "1065年",
                title: "妻子王弗去世",
                description: "苏轼的第一任妻子王弗去世，年仅27岁，十年后苏轼写下著名的《江城子·乙卯正月二十日夜记梦》悼念她。",
                poem: "十年生死两茫茫，不思量，自难忘。"
            },
            {
                year: "1069年",
                title: "反对王安石变法",
                description: "王安石推行新法，苏轼上书反对，认为变法过于激进，导致与王安石政见不合。",
                poem: "不畏浮云遮望眼，自缘身在最高层。"
            },
            {
                year: "1071年",
                title: "杭州通判",
                description: "苏轼被外放为杭州通判，远离政治中心，期间写下大量描写西湖美景的诗词。",
                poem: "欲把西湖比西子，淡妆浓抹总相宜。"
            },
            {
                year: "1079年",
                title: "乌台诗案",
                description: "苏轼因诗文被指控诽谤朝廷，被捕入狱，史称"乌台诗案"，险遭杀身之祸。",
                poem: "梦绕云山心似鹿，魂飞汤火命如鸡。"
            },
            {
                year: "1080年",
                title: "黄州贬谪",
                description: "苏轼被贬为黄州团练副使，开始"东坡居士"的生活，创作达到高峰，写下《赤壁赋》等不朽名篇。",
                poem: "大江东去，浪淘尽，千古风流人物。"
            },
            {
                year: "1085年",
                title: "重返朝廷",
                description: "宋哲宗即位，高太后听政，苏轼被召回朝廷，任翰林学士等职。",
                poem: "人生如梦，一尊还酹江月。"
            },
            {
                year: "1089年",
                title: "杭州知州",
                description: "苏轼再次外放杭州，任知州，疏浚西湖，修筑苏堤，造福百姓。",
                poem: "水光潋滟晴方好，山色空蒙雨亦奇。"
            },
            {
                year: "1094年",
                title: "惠州贬谪",
                description: "新党再度执政，苏轼被贬惠州，写下"日啖荔枝三百颗，不辞长作岭南人"的名句。",
                poem: "罗浮山下四时春，卢橘杨梅次第新。"
            },
            {
                year: "1097年",
                title: "儋州贬谪",
                description: "苏轼被贬至更偏远的儋州（今海南），成为北宋被贬最远的官员之一。",
                poem: "九死南荒吾不恨，兹游奇绝冠平生。"
            },
            {
                year: "1100年",
                title: "获赦北归",
                description: "宋徽宗即位，大赦天下，苏轼得以北归，途中写下"心似已灰之木，身如不系之舟"。",
                poem: "心似已灰之木，身如不系之舟。"
            },
            {
                year: "1101年",
                title: "苏轼逝世",
                description: "苏轼在北归途中病逝于常州，享年64岁。临终前写下"问汝平生功业，黄州惠州儋州"。",
                poem: "问汝平生功业，黄州惠州儋州。"
            }
        ];

        // 生成时间轴HTML
        const timeline = document.getElementById('timeline');
        
        timelineData.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <div class="timeline-year">${item.year}</div>
                    <div class="timeline-title">${item.title}</div>
                    <div class="timeline-desc">${item.description}</div>
                    <div class="timeline-poem">"${item.poem}"</div>
                </div>
            `;
            timeline.appendChild(timelineItem);
        });

        // 搜索功能
        const searchInput = document.getElementById('search');
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            timelineItems.forEach(item => {
                const content = item.textContent.toLowerCase();
                if (content.includes(searchTerm)) {
                    item.style.display = 'block';
                    
                    // 高亮显示匹配文本
                    const desc = item.querySelector('.timeline-desc');
                    const title = item.querySelector('.timeline-title');
                    const poem = item.querySelector('.timeline-poem');
                    
                    const highlight = (element) => {
                        if (element && searchTerm) {
                            const text = element.innerHTML;
                            const regex = new RegExp(searchTerm, 'gi');
                            element.innerHTML = text.replace(regex, match => 
                                `<span class="highlight">${match}</span>`);
                        }
                    };
                    
                    highlight(desc);
                    highlight(title);
                    highlight(poem);
                    
                    // 滚动到匹配项
                    if (searchTerm) {
                        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        });

        // 导航按钮功能
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        let scrollPosition = 0;
        
        prevBtn.addEventListener('click', function() {
            scrollPosition -= 300;
            if (scrollPosition < 0) scrollPosition = 0;
            timeline.style.transform = `translateX(-${scrollPosition}px)`;
        });
        
        nextBtn.addEventListener('click', function() {
            scrollPosition += 300;
            const maxScroll = timeline.scrollWidth - timeline.clientWidth;
            if (scrollPosition > maxScroll) scrollPosition = maxScroll;
            timeline.style.transform = `translateX(-${scrollPosition}px)`;
        });
    </script>