categories
	category_id: int
	category_title: varchar(32)

articles
	article_id: int
	article_title: varchar(128)
	article_text: varchar(800)
	article_image: varchar(128)
	article_postdate: datetime
	article_likes: int(11)
	article_is_featured: tinyint(1)
	fk_category_id: int(11)
	fk_author_id: int

authors
	author_id: int(11)
	author_name: varchar(32)
	author_image: varchar(128)
	author_title: varchar(32)
	author_about: varchar(256)
	

