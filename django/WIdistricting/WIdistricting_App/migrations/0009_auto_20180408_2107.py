# Generated by Django 2.0.2 on 2018-04-08 21:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('WIdistricting_App', '0008_pre_district_pre_district_plan'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pre_district',
            name='district_id',
        ),
        migrations.AddField(
            model_name='pre_district',
            name='district_name',
            field=models.CharField(blank=True, max_length=100, primary_key=True, serialize=False),
        ),
    ]