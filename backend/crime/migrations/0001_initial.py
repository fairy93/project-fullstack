# Generated by Django 3.2.3 on 2021-06-10 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CrimCCtv',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('police', models.TextField()),
                ('common', models.TextField()),
                ('create_at', models.DateTimeField()),
            ],
        ),
    ]
